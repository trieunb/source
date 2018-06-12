// Import library
import React, { Component } from 'react';
import {
	StyleSheet,
  	Image,
  	Text,
  	View,
  	KeyboardAvoidingView
} from 'react-native';

import styles 		from "./StyleSheet";
import LoginFormCom from "./LoginFormCom";

const logo = require('../../assets/images/login1_mark.png');

// Declare variable, const

// Create Class Loigin (Component)
export default class Login extends Component {
	render() {
	    return (
	    	<KeyboardAvoidingView behavior="padding" style={styles.container}>
	    		<View style={styles.logoContainer}>
	    			<Image source={logo} style={styles.logo} />
	    			<Text style={styles.title}>Login to your account</Text>
	    		</View>
	    		<View style={styles.formContainer}>
	    			<LoginFormCom />
	    		</View>
	    	</KeyboardAvoidingView>
	    );
	}
}