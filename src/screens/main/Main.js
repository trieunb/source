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
import store from '../auth/redux/stores/store';
//import component
import UserTab        from './tabs/UserTab';
import MeetingTab     from './tabs/MeetingTab';
import OfftimeTab     from './tabs/OfftimeTab';
/*============================================================================*/
//export class Main
export default class Main extends Component{
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
	UserTab: {
		screen:   UserTab
	},
	MeetingTab: {
  	screen:   MeetingTab
	},
	OfftimeTab: {
 		screen:   OfftimeTab
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
