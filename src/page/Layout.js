import React, {Component} from 'react';
import {Container,Content,Footer,FooterTab,Button,Text,Icon} from 'native-base'
import {Actions} from 'react-native-mobx';
import { CounterModel,HomeModel,UserinfoModel } from '../model'
import TabNavigator from 'react-native-tab-navigator'

import {Home,Hemai,Kaijiang,Shuoshuo,UserInfo} from './'

import {Header,Counter} from '../component'
import {observer} from 'mobx-react/native';


export default class K3 extends Component {
    constructor(){
        super();
        this.state={
            test:'我是title',
            page:false,
            selectedTab:'home'
        }
    }

    _renderTab = (Component,iconName,name,Model)=>{
        return (
            <TabNavigator.Item
                selected={this.state.selectedTab == iconName}
                title={name}
                selectedTitleStyle={{color:'#f57706'}}
                renderIcon={() => <Icon name={iconName} />}
                renderSelectedIcon={() => <Icon name={iconName} style={{color:'#f57706'}} />}
                onPress={() => this.setState({ selectedTab: iconName })}
            >
                <Component store={Model} />
            </TabNavigator.Item>
        )
    }
    render(){
        console.log('我是k3')
        const store = this.props.store;
        return (
            <Container>

                <TabNavigator
                    tabBarStyle={{opacity: 0.9,}}
                    sceneStyle={{paddingBottom: 0}}
                >
                    {this._renderTab(Home,'home','首页',HomeModel)}
                    {this._renderTab(Hemai,'people','合买')}
                    {this._renderTab(Kaijiang,'notifications','开奖')}
                    {this._renderTab(Shuoshuo,'chatbubbles','说说')}
                    {this._renderTab(UserInfo,'person','我的',UserinfoModel)}

                </TabNavigator>
            </Container>
        )



    }
}
