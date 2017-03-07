import React, {Component} from 'react';
import {Actions} from 'react-native-mobx';
import { Container,Content,Button,View,Text } from 'native-base';
import {Header} from '../component';
import {Layout} from "./";
import {FooterModel} from "../model"
export default class Kaijiang extends Component {
    shouldComponentUpdate(){
        // alert('1');
        return false;
    }

    render(){
        const store = this.props.store;
        return (
            <Container>
                <Header hideLeft title="开奖"/>
                <Content>
                    <View>
                        <Text>开奖</Text>
                    </View>
                </Content>

            </Container>
        )



    }
}

