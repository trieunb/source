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
  createDrawerNavigator,
  StackNavigator,
  createStackNavigator,
  DrawerItems,
  SafeAreaView
} from 'react-navigation'
/*============================================================================*/
//import component
import Login from './src/screens/auth/Login';
import Drawer from './src/screens/DrawerNavigator';

const MyApp = createStackNavigator({
  Login: { screen: Login },
  Home: { screen: Drawer },
},{
    // Default config for all screens
    headerMode: 'none',
    title: 'Main',
    initialRouteName: 'Login',
  });
/*============================================================================*/
//export class App
export default class App extends Component{
  render() {
    return (
      <MyApp />
    );
  }
}
