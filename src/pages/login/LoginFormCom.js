// Import library
import React, { Component } from 'react';
import {
	StyleSheet,
  	Text,
  	TextInput,
  	TouchableOpacity,
  	View
} from 'react-native';
// import { StackNavigator } from 'react-navigation';
import { Actions } from 'react-native-router-flux';
// Declare variable, const

// Create Class Loigin (Component)
export default class LoginFormCom extends Component {
	gotoHome(){
    	Actions.home()
   	}
	render() {
	    return (
	    	<View style={styles.container}>
	    		<TextInput 
	    			style={styles.input} 
	    			placeholder="UserId" 
	    			placeholderTextColor="rgba(255, 255, 255, 0.7)"
	    			returnKeyType="next"
	    			onSubmitEditing={() => this.passwordInput.focus()}
	    		/>
	    		<TextInput 
	    			style={styles.input} 
	    			placeholder="Password" 
	    			placeholderTextColor="rgba(255, 255, 255, 0.7)"
	    			returnKeyType="go"
	    			secureTextEntry
	    			ref={(input) => this.passwordInput = input}
	    		/>
	    		<TouchableOpacity 
	    			style={styles.btnContainer}
	    			onPress = {this.gotoHome}
	    		>
	    			<Text style={styles.btnText}>LOGIN</Text>
	    		</TouchableOpacity>
	    	</View>
	    );
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},
	input: {
		height: 40,
		backgroundColor: 'rgba(255, 255, 255, 0.7)',
		marginBottom: 10,
		color: '#FFF',
		paddingHorizontal: 10
	},
	btnContainer: {
		backgroundColor: '#2980b9',
		paddingVertical: 15
	},
	btnText: {
		textAlign: 'center',
		color: '#FFFFFF',
		fontWeight: '700'
	}
});

