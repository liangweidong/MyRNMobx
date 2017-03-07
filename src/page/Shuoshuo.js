import React, {Component} from 'react';
import {Actions} from 'react-native-mobx';
import { Container,Content,Button,View,Text } from 'native-base';
import {Header} from '../component';
import {Layout} from "./";
import {FooterModel} from "../model"
export default class Shuoshuo extends Component {
    shouldComponentUpdate(){
        //alert('1');
        return false;
    }

    render(){
        console.log('shuoshuo')

        const store = this.props.store;
        return (
            <Container>
                <Header hideLeft title="说说"/>
                <Content> 
                    <View>
                        <Text>说说</Text>
                    </View>
                </Content>

            </Container>
        )



    }
}

