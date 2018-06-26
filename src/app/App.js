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
import Login            from '../screens/login/Login';
import DrawerNavigator  from './components/DrawerNavigator';

const App = createStackNavigator({
  Login             : { screen: Login },
  DrawerNavigator   : { screen: DrawerNavigator },
},{
    // Default config for all screens
    headerMode: 'none',
    title: 'Main',
    initialRouteName: 'DrawerNavigator',
  });

export default App;
