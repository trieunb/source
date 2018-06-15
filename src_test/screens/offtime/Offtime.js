/**
*| Component      : App
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
  Image
} from "react-native";
import { Icon, Button, Container, Header, Content, Left } from 'native-base'
/*============================================================================*/
//import component
import HeaderComponent from '../HeaderComponent'

class Offtime extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Offtime",
    // headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
    drawerLabel: 'Offtime',
    drawerIcon: ({ tintColor }) => (
      <Icon name="md-alarm"/>
    ),
    headerTitleStyle: {
        textAlign:"center",
        flex:1
    },
  })
  render() {
    return (
      <Container>
        <HeaderComponent title="Offtime" drawerOpen={() => this.props.navigation.navigate('DrawerOpen')} />
        <Content
          contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
          <Button
            onPress={() => this.props.navigation.navigate('Home')} full>
            <Text style={{ color: 'white' }}>Go To Settings Screen</Text>
          </Button>
        </Content>
      </Container>
    )
  }

}

export default Offtime;
