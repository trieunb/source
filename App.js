/**
*| Component      : App
*| Author       	: ANS806 - trieunb@ans-asia.com
*| Created date 	: 2018-06-11
*| Description   	:
*/
/*============================================================================*/
//import library
import React, { Component } from 'react';
import {
  View,
   Text,
   StyleSheet,
   ScrollView,
   Image
} from 'react-native';
import { Container, Content, Icon, Header, Body } from 'native-base';
import { createDrawerNavigator, StackNavigator, createStackNavigator, DrawerItems, SafeAreaView } from 'react-navigation';
//import component
// import Main   from './src/screens/Main';
// import Login  from './src/screens/auth/components/Login';
import Routes from './src/screens/Routes';

// const Navigator = createStackNavigator({
//   Main: {
//     screen: Main
//   }
// })
/*============================================================================*/
//export class App
export default class App extends Component{
  render() {
    return (
      // <Navigator />
      <Routes />
    );
  }
}
