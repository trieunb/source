/**
*| Component      : User
*| Author       	: ANS806 - trieunb@ans-asia.com
*| Created date 	: 2018-06-11
*| Description   	:
*/
/*============================================================================*/
//import library
import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import { Button, FormValidationMessage } from 'react-native-elements'
import FloatingLabel from 'react-native-floating-labels';
import { connect } from 'react-redux';
/*============================================================================*/
//import redux action
import { login }  from '../../actions/action'
import styles from './styles';
/*============================================================================*/
//export class FormLogin
class FormLogin extends Component<Props>{
    constructor(props) {
        super(props);
        this.username = '';
        this.password = '';
    }
    userLogin = () => {
        if (this.username === '' || this.password === '') {
            Alert.alert(
                'Error!',
                'user name or password invalid!',
            )
        } else {
            this.props.doLogin({
                username : this.username,
                password: this.password
            });
        }
	}
    render() {
        return(
            <View style={styles.container}>
                <FloatingLabel
                    labelStyle={styles.labelInput}
                    inputStyle={styles.formInput}
                    style={styles.input}
                    underlineColorAndroid='transparent'
                    returnKeyType='next'
                    autoCapitalize='none'
                    selectTextOnFocus={true}
                    onChangeText={(text) => this.username = text }
                    onSubmitEditing={() => this.txt_password.focus()}
                >UserName</FloatingLabel>
                <FloatingLabel
                    labelStyle={styles.labelInput}
                    inputStyle={styles.formInput}
                    style={styles.input}
                    underlineColorAndroid='transparent'
                    autoCapitalize='none'
                    selectTextOnFocus={true}
                    secureTextEntry={true}
                    onChangeText={(text) => this.password = text }
                    ref={(input) => this.txt_password = input}
                >Password</FloatingLabel>
                <Button
                    buttonStyle={styles.btnLogin}
                    backgroundColor='#3498db'
                    title='Login'
                    onPress={this.userLogin}
                />
            </View>
        )
    }
}
/*============================================================================*/
//container
const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        doLogin: (payload) => { dispatch(login(payload)); },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);
/*============================================================================*/
