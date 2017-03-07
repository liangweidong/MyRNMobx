import React, {Component} from 'react';
import {Dimensions} from 'react-native'
import {Container,Content,Footer,FooterTab,Button,Text,Icon} from 'native-base'
import {Actions} from 'react-native-mobx';
import { CounterModel,HomeModel,UserinfoModel, HeaderCenterModel} from '../model'
import {Home,Hemai,Kaijiang,Shuoshuo,UserInfo} from './'

import {Header,Counter,HeaderCenter} from '../component'

export default class K3 extends Component {
    constructor(props){
        super(props);
        this.state={
        }
    }
    _dataList = [
        {name:'玩法',type:'wanfa'},
        {name:'玩法',type:'wanfa'},
        {name:'玩法',type:'wanfa'},
        {name:'玩法',type:'wanfa'},
        {name:'玩法',type:'wanfa'},
        {name:'玩法',type:'wanfa'},
        {name:'玩法',type:'wanfa'},
        {name:'玩法',type:'wanfa'},
        {name:'玩法',type:'wanfa'},
    ]
    _centerPress = ()=>{
        HeaderCenterModel.toggle()
    }
    render(){
        console.log('我是k3')
        const store = this.props.store;
        return (
            <Container>
                <Header title="快三" centerPress={this._centerPress} />
                <Content style={{height:'100%',backgroundColor:'red',}}>
                    <HeaderCenter store={HeaderCenterModel}  />
                    <Content>
                        <Text>呵呵</Text>
                        <Text>呵呵</Text>
                        <Text>呵呵</Text>
                    </Content>

                </Content>
            </Container>
        )



    }
}
