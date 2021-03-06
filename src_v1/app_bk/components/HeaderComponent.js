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
                  <Title style={{
                        width: '150%',
                        textAlign: 'center',
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
