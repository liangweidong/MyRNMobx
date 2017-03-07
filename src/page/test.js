import React,{Component} from 'react'
import {Animated} from 'react-native';
import {Home,Hemai,Kaijiang,Shuoshuo,UserInfo} from "./";
import {HomeModel,UserinfoModel} from '../model'
import {Container,View,Text} from 'native-base'
export default class Test extends Component{

    constructor(){
        super();
        this.state = {
            bouncValue:new Animated.Value(.5)
        }
    }
    render(){
        console.log('1')
        return(
            <Container>
                <View style={{paddingTop:20}}>
                    <Text onPress={()=>{
                        this.state.bouncValue.setValue(0);
                        Animated.spring(
                            this.state.bouncValue,
                            {
                                toValue:.8
                            }
                        ).start();


                    }}>test</Text>

                    <View style={{
                            width:100,height:100,backgroundColor:'red',
                            transform:[
                                {scale:this.state.bouncValue._value}
                            ]
                        }}>

                    </View>
                </View>
            </Container>
        )
    }
}

