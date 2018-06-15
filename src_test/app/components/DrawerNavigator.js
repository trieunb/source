import React, { Component } from 'react';
import {
  View, Text, StyleSheet,
  ScrollView, Image
} from 'react-native';

import {
  Container, Content, Icon, Header,
  Body, Card, CardItem, Left, Thumbnail
} from 'native-base'
import {
  createDrawerNavigator, StackNavigator,
  createStackNavigator, DrawerItems, SafeAreaView
} from 'react-navigation'

import Home       from '../../screens/home/Home';
import Meeting    from '../../screens/meeting/Meeting';
import Offtime    from '../../screens/offtime/Offtime';
import Login      from '../../screens/login/Login';

const CustomDrawerContentComponent = (props) => (
  <Container>
    <Header style={styles.drawerHeader}>
      <Body style={styles.bodyContainer}>
          <Image
            style={styles.drawerImage}
            source={require('../../images/no_avatar.jpg')} />
          <Text style={styles.title}>ANS-ASIA</Text>
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
);

export default MyApp = createDrawerNavigator({
  // For each screen that you can navigate to, create a new entry like this:
    Home: {
      screen: Home,
    },
    Meeting: {
      screen: Meeting
    },
    Offtime: {
      screen: Offtime
    },
    Logout: {
      screen: Login
    }
  },{
      initialRouteName: 'Home',
      drawerPosition: 'left',
      contentComponent: CustomDrawerContentComponent,
      drawerOpenRoute: 'DrawerOpen',
      drawerCloseRoute: 'DrawerClose',
      drawerToggleRoute: 'DrawerToggle'
    });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerHeader: {
    height: 100,
    backgroundColor: 'white',
  },
  bodyContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  drawerImage: {
    height: 80,
    width: 80,
    borderRadius: 75,
    marginLeft: 20
  },
  title: {
    width: 200,
    marginLeft: 10,
    fontWeight: '700'
  }
})
