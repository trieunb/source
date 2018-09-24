import React, { Component } from 'react';
import {
  View,
   Text,
   StyleSheet,
   ScrollView,
   Image
} from 'react-native';

import {
  Container, Content, Icon,
  Header, Body, Card, CardItem,
  Left, Thumbnail
} from 'native-base'
import {
  createDrawerNavigator, StackNavigator,
  createStackNavigator, DrawerItems, SafeAreaView
} from 'react-navigation'

import styles from '../stylesheet/DrawerNavigator';

import Home       from '../../screens/home/Home';
import Meeting    from '../../screens/meeting/Meeting';
// import Offtime    from '../../screens/offtime/Offtime';
import Offtime    from '../../screens/offtime/OfftimeStackNavigator';
import Flextime   from '../../screens/flextime/Flextime';
import Test       from '../../screens/test/Test';
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
      screen: Offtime,
      navigationOptions: {
        title: "Offtime",
        drawerLabel: 'Offtime',
        drawerIcon: ({ tintColor }) => (
          <Icon name="md-alarm"/>
        ),
      }
    },
    Flextime: {
      screen: Flextime
    },
    Test: {
      screen: Test
    },
    Logout: {
      screen: Login
    }
  },{
      mode: 'card',
      initialRouteName: 'Test',
      drawerPosition: 'left',
      contentComponent: CustomDrawerContentComponent,
      drawerOpenRoute: 'DrawerOpen',
      drawerCloseRoute: 'DrawerClose',
      drawerToggleRoute: 'DrawerToggle',
    });
