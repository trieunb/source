import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image
} from "react-native";

//library imports
import { Icon, Button, Container, Header, Content, Left } from 'native-base'

//custom components imports
import Meeting from '../HeaderComponent'

class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Meeting",
    // headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
    drawerLabel: 'Meeting',
    drawerIcon: ({ tintColor }) => (
      <Icon name="md-home"/>
    ),
  })


  render() {
    return (
      <Container>
        <HeaderComponent title="Meeting" drawerOpen={() => this.props.navigation.navigate('DrawerOpen')} />
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

export default Meeting;
