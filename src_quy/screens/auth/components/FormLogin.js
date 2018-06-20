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

import { connect } from 'react-redux';
import { createDrawerNavigator, StackNavigator, createStackNavigator, DrawerItems, SafeAreaView  } from 'react-navigation'
/*============================================================================*/
//import redux action
import { login }  from '../actions/action'
import styles from './style';
/*============================================================================*/
//export class FormLogin
export default class FormLogin extends Component{
  static navigationOptions = ({ navigation }) => {
    const params = navigation.state.params || {};
  };
  constructor(props) {
    super(props);
    this.state = {
      username : '',
      password : ''
    };
  }
  userLogin() {
    if (this.state.username === '' || this.state.password === '') {
      Alert.alert(
        'Error!',
        'user name or password invalid!',
      )
    } else {
      this.props.doLogin(this.state.username, this.state.password)
      // Actions.main();
      // this.props.navigation.navigate('Home');
    }
    console.log(this.props);
	}
  render() {
    const {navigation}  = this.props;
    // console.log(this.props.isLoggedIn);
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
            onChangeText={(text) => this.setState({ username: text })}
            onSubmitEditing={() => this.password.focus()}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="rgba(255,255,255,0.8)"
            returnKeyType="go"
            secureTextEntry={true}
            value={this.state.password}
            onChangeText={(text) => this.setState({ password: text })}
            ref={(input) => this.password = input}
          />
          <TouchableOpacity style={styles.btnLogin}
            onPress={() => this.userLogin()}
            // onPress={() => navigation.navigate('Home')}
          >
            <Text style={styles.btnText}>LOGIN</Text>
          </TouchableOpacity>
      </View>
    )
  }
}
/*============================================================================*/
//container
// const mapStateToProps = (state, ownProps) => {
//     return {
//         isLoggedIn: state.auth.isLoggedIn
//     };
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         doLogin: (username, password) => { dispatch(login(username, password)); },
//     }
// }
// export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);
/*============================================================================*/
