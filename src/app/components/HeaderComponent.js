/**
*| Component      : Header
*| Author       	: ANS806 - trieunb@ans-asia.com
*| Created date 	: 2018-06-11
*| Description   	:
*/
/*============================================================================*/
//import library
import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity
} from "react-native";

import { Header, Body, Title, Content, Left, Icon, Right, Container } from 'native-base'

// import styles
import { COLOR_MAIN, styleCommon } from '../../app/stylesheet/Common';

class HeaderComponent extends Component {
    render() {
        return (
            <Header style={styleCommon.header}>
                <Left>
                    <TouchableHighlight
                        onPress={() => this.props.drawerOpen()}
                    >
                        <Icon name="ios-menu" style={{color: COLOR_MAIN}}/>
                    </TouchableHighlight>
                </Left>
                <Body>
                    <Title style={{
                        width: '150%',
                        textAlign: 'center',
                        color: COLOR_MAIN
                    }}>
                        {this.props.title}
                    </Title>
                </Body>
                <Right>
                    {this.props.rightHeader}
                </Right>
            </Header>
        );
    }
}
export default HeaderComponent;
