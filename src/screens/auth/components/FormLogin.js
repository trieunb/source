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
  StyleSheet, View, Text, TextInput, TouchableOpacity, Alert
} from 'react-native';
import {Actions} from 'react-native-router-flux';
/*============================================================================*/
//export class FormLogin
export default class FormLogin extends Component{
  constructor(props) {
    super(props);
    this.state = {
      username : '',
      password : ''
    },
    this.doLogin = this.doLogin.bind(this);
  }
  doLogin() {
    const { username, password } = this.state;
    if (username === '' || password === '') {
      Alert.alert(
        'Error!',
        'user name or password invalid!',
      )
    } else {
      Actions.main();
    }
	}
  render() {
    return(
      <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="UserName"
            placeholderTextColor="rgba(255,255,255,0.8)"
            returnKeyType="next"
            autoCapitalize="none"
            autoCorrect={false}
            value={this.state.username}
            onChangeText={text => this.setState({ username: text })}
            onSubmitEditing={() => this.passwordInput.focus()}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="rgba(255,255,255,0.8)"
            returnKeyType="go"
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={text => this.setState({ password: text })}
            ref={(input) => this.passwordInput = input}
          />
          <TouchableOpacity style={styles.btnLogin}
            onPress={this.doLogin}
          >
            <Text style={styles.btnText}>LOGIN</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: '#FFF',
    marginBottom: 10,
    paddingHorizontal: 10
  },
  btnLogin: {
    backgroundColor: '#3498db',
    paddingVertical: 15
  },
  btnText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700'
  }
});
