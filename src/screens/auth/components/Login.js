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
import FormLogin from './FormLogin';
/*============================================================================*/
//export class Login
export default class Login extends Component{
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
    return {
      header: () => null
    };
  };
  render() {
    return(
        <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
              <View style={styles.logoContainer}>
                <Image
                  style={styles.logo}
                  source={require('../../../images/logo_login.png')}
                />
                <Text style={styles.title}>
                  Login To Account
                </Text>
              </View>
              <View style={styles.formLogin}>
                <FormLogin />
              </View>
        </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495e',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1
  },
  logo: {
    width: 200,
    height: 200,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
    opacity: 0.8
  },
});
