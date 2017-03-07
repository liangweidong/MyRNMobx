import React, {Component,PureComponent} from 'react';
import {Actions} from 'react-native-mobx';
import { Container,Content,Button,View,Text,Row,Col,Icon } from 'native-base';
import {Header} from '../component';
import Carousel from 'antd-mobile/lib/carousel';
import Grid from 'antd-mobile/lib/grid';
import WhiteSpace from 'antd-mobile/lib/white-space'
import {Image} from "react-native";
import {Layout} from "./";
import {FooterModel} from "../model"


export default class Home extends PureComponent {
    shouldComponentUpdate(newprop,newstate){
        // alert('1');
        if(newprop !== this.props){
            return true
        }
        return false;
    }

    render(){
        console.log('不能重复');

        const store = this.props.store;

        return (
            <Container key="main" style={{backgroundColor:"#eee"}}>
                <Content style={{
                    borderTopWidth:20,
                    borderColor:"#f57706",
                }}>

                    <Carousel autoplay={false} infinite>
                        {
                            store.ImgList.map((imgitem,index)=>(
                                <Image key={index} source={{uri:imgitem}} style={{height:120,width:390}} />
                            ))
                        }
                    </Carousel>
                    <WhiteSpace />
                    <Row style = {{backgroundColor:'#fff'}}>
                        {store.firstList.map((i,index)=>{
                            return (
                                <Col key={index}>
                                    <Button transparent full style={{height:80,flex:1,alignItems:'center',justifyContent:'center'}}
                                        onPress={()=>{
                                            Actions.k3()
                                        }}
                                    >
                                        <Icon style={{paddingRight:3}} name={i.iconName} />
                                        <View>
                                            <Text style={{fontSize:14,marginBottom:3}}>{i.name}</Text>
                                            <Text style={{fontSize:12,color:'#aaa'}}>{i.intro}</Text>
                                        </View>
                                    </Button>

                                </Col>
                            )
                        })}
                    </Row>
                    <WhiteSpace />

                    <View style = {{backgroundColor:'#fff'}}>
                        {
                            Array.from({length:Math.ceil(store.secondList.length/3)}).map((i,index)=>{
                                return (
                                    <Row key={index}>
                                        {store.secondList.map((ii,iindex)=>{
                                            if( iindex >= index*3 && iindex < (index+1)*3 ){
                                                return(
                                                    <Col key={ii.name}>
                                                        <Button transparent full style={{
                                                            height:90,

                                                            padding:0

                                                        }} onPress={()=>store.clickType(ii.name)} >
                                                            <View
                                                                style={{
                                                                    height:90,
                                                                    borderWidth:1,
                                                                    borderColor:'#eee',
                                                                    justifyContent:'center',
                                                                    alignItems:'center',
                                                                    backgroundColor:ii.name == store.selected?'#f57706':'transparent',
                                                                    flex:1
                                                                }}
                                                            >
                                                                <Image source={ii.imgurl} style={{width:50,height:50}} />
                                                                <Text style={{color:'#666',fontSize:13}}>{ii.name}</Text>
                                                            </View>
                                                        </Button>
                                                    </Col>
                                                )
                                            }
                                        })}
                                    </Row>
                                )
                            })
                        }
                    </View>




                    <WhiteSpace />


                    <View style = {{backgroundColor:'#fff'}}>
                        {store.thridList.map((i,index)=>{
                            return (
                                <Row key={index} style={{height:50}}>
                                    {i.map(ii=>{
                                        return (
                                            <Col key={ii.name} style={{borderWidth:0.5,borderColor:'#eee',justifyContent:'center',alignItems:'center'}}>
                                                <Button transparent full style={{flex:1}}>
                                                    {ii.hasIcon?<Icon name={ii.hasIcon} style={{fontSize:22,marginRight:3,color:'#333'}} />:null}
                                                    <Text style={{fontSize:14,color:'#333'}}>{ii.name}</Text>
                                                </Button>
                                            </Col>
                                        )
                                    })}
                                </Row>
                            )
                        })}
                    </View>
                </Content>
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
                <WhiteSpace/>
            </Container>
        )



    }
}

