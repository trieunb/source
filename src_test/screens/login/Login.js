/**
*| Component      : User
*| Author       	: ANS806 - trieunb@ans-asia.com
*| Created date 	: 2018-06-11
*| Description   	:
*/
/*============================================================================*/
//import library
import React, { Component } from 'react';
import {
  StyleSheet,
  View, Text, Image,
  SafeAreaView, StatusBar, TextInput,
  KeyboardAvoidingView, TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { Provider } from 'react-redux';
import { Icon, Button, Container, Header, Content, Left } from 'native-base'

import FormLogin      from './components/FormLogin';
import { Wallpaper }  from '../../app/components/Common';
import store          from './stores/store';
import bgSrc          from '../../images/header.jpg';
/*============================================================================*/
//export class Login
export default class Login extends Component{
  static navigationOptions = ({ navigation }) => ({
    title: "Logout",
    drawerLabel: 'Logout',
    drawerIcon: ({ tintColor }) => (
      <Icon name="md-log-out"/>
    ),
    header: () => null,
    drawerLockMode: 'locked-closed'
  });
  render() {
    const { navigation } = this.props;
    return(
      <Provider store={store}>
        <Wallpaper source={bgSrc}>
            <FormLogin navigation={navigation}/>
        </Wallpaper>
      </Provider>
    )
  }
}
