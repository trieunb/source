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
import HeaderComponent from '../../app/components/HeaderComponent'

class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    // title: "Hello",
    // headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Icon name="md-home"/>
    )
  })

  render() {
    const {navigation} = this.props;
    return (
      <Container>
        <HeaderComponent title="Home" drawerOpen={() => this.props.navigation.toggleDrawer()} />
        <Content
          contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 10 }}>
          <Button
            onPress={() => this.props.navigation.navigate('Meeting')} full>
            <Text style={{ color: 'white' }}>Go To Meeting Screen</Text>
          </Button>
        </Content>
      </Container>
    )
  }

}

export default Home;
