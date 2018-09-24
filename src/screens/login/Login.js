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
import { Icon, Button, Container, Header, Content, Left } from 'native-base'
import Spinner from 'react-native-loading-spinner-overlay';

import FormLogin from './components/FormLogin';
import { Wallpaper } from '../../app/components/Common';
import bgSrc from '../../images/header.jpg';
/*============================================================================*/
//export class Login
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }
    parentMethod = (isLoading) => {
        this.setState({ visible: isLoading })
    }
    render() {
        const { navigation } = this.props;
        const isLoading = this.state.visible;
        return (
            <Wallpaper source={bgSrc}>
                <FormLogin
                    navigation={navigation}
                    chilldmethod={this.parentMethod}
                />
                <View>
                    <Spinner visible={isLoading} textContent={"Loading..."} textStyle={{ color: '#FFF' }} />
                </View>
            </Wallpaper>
        )
    }
}
