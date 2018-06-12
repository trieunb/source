// Import library
import React, { Component } from 'react';
import {
	StyleSheet,
  	Image,
  	Text,
  	View,
} from 'react-native';

// Declare variable, const

// Create Class Loigin (Component)
export default class Home extends Component {
	render() {
	    return (
	    	<View style={styles.container}>
	    		<Text style={styles.title}>
	    			WELCOME TO ANS-ASIA
	    		</Text>
	    	</View>
	    );
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		flexGrow: 1
	},
	title: {
		fontSize: 30,
		alignItems: 'center' 
	}
});