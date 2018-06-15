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
import Login from '../screens/login/Login';
import Drawer from './components/DrawerNavigator';

const App = createStackNavigator({
  Login: { screen: Login },
  Home: { screen: Drawer },
},{
    // Default config for all screens
    headerMode: 'none',
    title: 'Main',
    initialRouteName: 'Login',
  });

export default App;
