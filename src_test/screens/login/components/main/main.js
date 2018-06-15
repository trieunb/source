/**
*| Screen           : Login
*| Author           : ANS809 - quypn@ans-asia.com
*| Created date     : 2018-06-14
*| Description      : Main view for login screen
*/
/*============================================================================*/
// import library
import React, { Component } from 'react';
import { View, KeyboardAvoidingView, Image, Text } from "react-native";
import FormLogin from '../formLogin/formLogin'
// import style
import styles from './styles';

class Main extends Component<Props> {

    render() {
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
            >
                <View style={styles.logoContainer}>
                    <Image
                        style={styles.logo}
                        source={require('../../../../assets/imgs/logo_login.png')}
                    />
                    <Text style={styles.title}>
                        Login To Account
                    </Text>
                </View>
                <View>
                    <FormLogin />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

export default Main;
