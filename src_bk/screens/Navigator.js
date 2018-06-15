/**
*| Component      : Main
*| Author       	: ANS806 - trieunb@ans-asia.com
*| Created date 	: 2018-06-11
*| Description   	:
*/
/*============================================================================*/
//import library
import React, { Component } from 'react';
import { Platform }                               from 'react-native';
import { Container, Text, Content, Icon }         from 'native-base';
import { createBottomTabNavigator, TabNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import store from './auth/stores/store';
//import component
import Login        from './auth/Login';
import User        from './user/User';
import Meeting     from './meeting/Meeting';
import Offtime     from './offtime/Offtime';
/*============================================================================*/
//export class Main
export default class Navigator extends Component{
	// static navigationOptions = {
	// 	header: () => null
	// }
	render() {
		return(
			<Provider store={store}>
				<MainNavigator></MainNavigator>
			</Provider>
		);
	}
}

let routerConfig = {
  Login: {
		screen:   Login
	},
	User: {
		screen:   User
	},
	Meeting: {
  	screen:   Meeting
	},
	Offtime: {
 		screen:   Offtime
	},
};
let navigationConfig = {
	animationEnabled: true,
  swipeEnabled: true,
  activeTintColor: 'tomato',
  inactiveTintColor: 'gray',
	tabBarOptions: {
    showIcon: true,
    showLabel: true,
  },
};

const MainNavigator = createBottomTabNavigator (routerConfig, navigationConfig);
