import React,{Component} from "react"
import {View,Text,TouchableHighlight,Animated,Dimensions} from 'react-native'
import {Button} from 'native-base'

export default class HeaderCenter extends Component {
    shouldComponentUpdate(){
        alert('中间')
        console.log('fuck')
        return false;
    }


    render(){
        const SCREEN_WIDTH = Dimensions.get('window').width;
        const SCREEN_HEIGHT= Dimensions.get('window').height;
        const store = this.props.store;

        if(!store.isOpen){
            return (null)
        }
        else{
            return (
                <Button full transparent
                    onPress={()=>{
                        store.toggle()
                    }}
                    style={{
                        backgroundColor:"#0000" ,
                        width:'100%',
                        height:SCREEN_HEIGHT,
                        padding:0,
                        position:'absolute',
                        top:0,
                        alignItems:'flex-start',
                        zIndex:2,

                    }}>
                    <Animated.View style={{
                        width:'100%',
                        backgroundColor:'#eee',
                        flexDirection:'row',
                        flexWrap:'wrap',
                        transform:[
                            {scale:store.bounceValue}
                        ]
                    }}>
                        {store.dataList.map((i,index)=>{
                            return (
                                <TouchableHighlight full key={index}
                                    style={{
                                        width:100/store.perLine+'%',
                                        height:50,
                                        backgroundColor:store.currentSelected == i.type?'#f57706':'#fff',
                                        borderWidth:0.5,
                                        borderColor:"#eee",
                                        justifyContent:'center',
                                        alignItems:'center',
                                    }}
                                    onPress={()=>store.selected(i.type)}
                                >
                                    <Text style={{
                                        color:store.currentSelected == i.type?'#fff':'#333'
                                    }}>{i.name+SCREEN_HEIGHT}</Text>
                                </TouchableHighlight>
                            )
                        })}
                    </Animated.View>
                </Button>
            )
        }

    }
}