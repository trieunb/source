/*
author  :   Trieunb
created :   2018-06-09
description: Main Component
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

import { Header, Body, Title, Content, Left, Icon, Right } from 'native-base'

class HeaderComponent extends Component {
    render() {
        return (
            <Header>
                <Left>
                  <TouchableHighlight
                      onPress={() => this.props.drawerOpen()}
                      // onPress={() => {
                      //   this.props.navigation('DrawerOpen')
                      //   // const { navigate } = this.props.navigation
                      //   // navigate('DrawerOpen')
                      // }}
                      // onPress={() => console.log(this.props)}
                    >
                    <Icon name="ios-menu" />
                  </TouchableHighlight>

                </Left>
                <Body>
                    <Title>{this.props.title}</Title>
                </Body>
            </Header>
        );
    }
}
export default HeaderComponent;
