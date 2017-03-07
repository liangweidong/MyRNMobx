import React,{Component} from "react";

import {Container,Content,View,Text,Thumbnail,Row,Col} from 'native-base'
import { Button,Icon } from 'react-native-elements'
import Grid from "antd-mobile/lib/grid"
import WhiteSpace from 'antd-mobile/lib/white-space'

import {Header} from "../component"
import {Layout} from "./";
import {FooterModel} from "../model"

export default class UserInfo extends Component{
    shouldComponentUpdate(){
        // alert('1');
        return false;
    }
    render(){
        console.log('usrinfo')
        const store = this.props.store;
        return (
            <Container style={{backgroundColor:"#eee"}}>
                <Header hideLeft title="个人中心" />
                <Content>
                    <View style={{backgroundColor:"#f57706",height:120,flexDirection:'row',alignItems:'center'}}>
                        <Thumbnail source={{uri:'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRBuWxcochnmMWN955S4Mh8cjMLwRZkEdIvX01rm940nW5G-kwO'}} style={{width:80,height:80, borderRadius: 40,marginLeft:20,marginRight:10}}/>
                        <View>
                            <Text style={{marginBottom:10,fontSize:20,color:'#fff'}}>我的名字就坑</Text>
                            <Text style={{color:'#fff'}}>
                                余额
                                <Text style={{color:'yellow'}}>
                                    0.01
                                </Text>
                                元
                            </Text>
                        </View>
                    </View>
                    <Row>
                        <Col style={{marginRight:1,backgroundColor:"#fff"}}>
                            <Button
                                backgroundColor="transparent"
                                color="#f57706"
                                title="充值"
                                icon={{name:"yen",type:'font-awesome',color:'#f57706'}} />
                        </Col>
                        <Col style={{backgroundColor:"#fff"}}>
                            <Button
                                backgroundColor="transparent"
                                color="#069"
                                title="提款"
                                icon={{name:"print",type:'foundation',color:'#069'}} />
                        </Col>
                    </Row>
                    <WhiteSpace/>
                    <View style={{height:200}}>
                        <Grid
                            data={store.gridList} columnNum={4}
                            renderItem={(dataItem,index)=>(
                                    <View style={{flex:1,justifyContent:'center',alignItems:'center',backgroundColor:'#fff'}}>
                                        <Icon name="print" type='foundation' />
                                        <Text style={{color:'#333',fontSize:14,marginTop:5}}>{dataItem.text}</Text>
                                    </View>
                                )}
                        />
                    </View>
                </Content>

            </Container>
        )
    }
}