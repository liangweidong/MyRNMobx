import React,{PureComponent} from 'react'

import {View,Text} from "react-native"

export default class  Page1 extends PureComponent{
    render(){
        console.log('1')
        return (
            <View aria-hidden={true}>
                <Text>Page1</Text>
            </View>
        )
    }
}