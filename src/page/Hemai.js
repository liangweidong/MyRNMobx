import React, {Component} from 'react';
import {Actions} from 'react-native-mobx';
import { Container,Content,Button,View,Text } from 'native-base';
import { Icon } from 'react-native-elements';
import {Header} from '../component';
import {Layout} from "./";
import {FooterModel} from "../model"


export default class Home extends Component {
    shouldComponentUpdate(){
        // alert('1');
        return false;
    }

    render(){
        const store = this.props.store;
        return (
            <Container>
                <Header hideLeft title="合买中心"/>
                <Content>
                    <View>
                        <Text>合买中心</Text>
                    </View>
                </Content>
            </Container>
        )



    }
}

