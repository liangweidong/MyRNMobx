import React,{Component} from "react";
import {Container,Content,Header,Title,Button,Left,Right,Body} from 'native-base'
import {Actions} from 'react-native-mobx';

import {Icon} from 'react-native-elements'

export default class Headers extends Component{
    shouldComponentUpdate(){
        return false;
    }
    render(){
        console.log('我不应该出现')
        let Component = this.props.centerComponent
        return (
            <Header style={styles.Headers}>
                <Left>
                    {
                        !this.props.hideLeft ?
                        <Button transparent onPress={Actions.pop}>
                            <Icon name="arrow-back" color="#fff" reverseColor="transpatent" />
                        </Button>
                        :null
                    }

                </Left>
                <Body>
                    {
                        this.props.centerPress?
                            <Button transparent onPress={this.props.centerPress}>
                                <Title style={{color:'#fff'}} >
                                    {this.props.title}
                                </Title>
                            </Button>:
                            <Title style={{color:'#fff'}} >
                                {this.props.title}
                            </Title>
                    }

                </Body>
                <Right>
                    {this.props.RightComponent?this.props.RightComponent():null}
                </Right>
            </Header>
        )
    }
}

const styles = {
    Headers:{
        backgroundColor:"#f57706"
    },

}