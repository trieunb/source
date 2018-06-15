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
import MyApp from './src_test/app/App';
//export class App
export default class App extends Component{
  render() {
    return (
      <MyApp />
    );
  }
}
