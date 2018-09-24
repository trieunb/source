import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, Image, ImageBackground } from 'react-native';
import { loginInput, wallpaper } from '../stylesheet/Common';
// validate
import { validate } from 'validate.js';
import { Container } from 'native-base';

export class LoginInput extends Component {
    static propTypes = {
        source: PropTypes.number.isRequired,
        placeholder: PropTypes.string.isRequired,
        secureTextEntry: PropTypes.bool,
        autoCorrect: PropTypes.bool,
        autoCapitalize: PropTypes.string,
        returnKeyType: PropTypes.string,
        onSubmitEditing: PropTypes.func,
        ref: PropTypes.func,
    };
    render() {
        return (
            <View style={loginInput.inputWrapper}>
                <Image source={this.props.source} style={loginInput.inlineImg} />
                <TextInput
                    style={loginInput.input}
                    placeholder={this.props.placeholder}
                    secureTextEntry={this.props.secureTextEntry}
                    autoCorrect={this.props.autoCorrect}
                    autoCapitalize={this.props.autoCapitalize}
                    returnKeyType={this.props.returnKeyType}
                    onSubmitEditing={this.props.onSubmitEditing}
                    ref={this.props.inputRef}
                    placeholderTextColor="white"
                    underlineColorAndroid="transparent"
                    onChangeText={this.props.onChangeText}
                />
            </View>
        );
    }
}

export class Wallpaper extends Component {
    render() {
        return (
            <ImageBackground style={wallpaper.picture} source={this.props.source}>
                {this.props.children}
            </ImageBackground>
        );
    }
}

export class Loading extends Component {
    render() {
        return (
            //		<ImageBackground style={wallpaper.picture} source={require('../../images/header.jpg')}>
            <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <Image
                    source={require('../../images/loader.gif')}
                />
            </View>
            //		</ImageBackground>
        );
    }
}

export const setDateHorizontal = (deviceWidth) => {
    var dateHorizontal = 'row';
    if (deviceWidth < 360) {
        dateHorizontal = 'column'
    } else if (deviceWidth > 412) {
        dateHorizontal = 'row-start'
    } else {
        dateHorizontal = 'row'
    }
    return dateHorizontal
}