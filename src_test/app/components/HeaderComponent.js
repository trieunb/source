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

class HeaderComponent extends Component {
  static navigationOptions = {
    header: navigation => ({
      style: {
        backgroundColor: 'rgb(47, 54, 61)',
        shadowOpacity: 0
      },
      titleStyle: {
        color: '#fefefe',
        fontFamily: 'MuseoSansRounded-300',
        fontWeight: '300',
        justifyContent: 'space-between',
        textAlign: 'center'
      },
      tintColor: '#fefefe'
    })
  }
    render() {
        return (
          <Header>
              <Left>
                <TouchableHighlight
                    onPress={() => this.props.drawerOpen()}
                  >
                  <Icon name="ios-menu" />
                </TouchableHighlight>
              </Left>
              <Body>
                  <Title>
                    {this.props.title}
                  </Title>
              </Body>
          </Header>
        );
    }
}
export default HeaderComponent;
