/**
*| Component      : User
*| Author       	: ANS806 - trieunb@ans-asia.com
*| Created date 	: 2018-06-11
*| Description   	:
*/
/*============================================================================*/
//import library
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Main from './components/main/main';
import Layout from '../../common/components/layout/layout';
import store from './stores/store';
/*============================================================================*/
//export class Login
class LoginScreen extends Layout{
    static navigationOptions = {
        header: null
    }
    render() {
        return(
            <Provider store = {store}>
                <Main navigation={this.props.navigation}/>
            </Provider>
        )
    }
}

export default LoginScreen;