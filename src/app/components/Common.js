import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, Image, ImageBackground } from 'react-native';
import { loginInput, wallpaper } from '../stylesheet/Common';

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
    return(
      <View style={loginInput.inputWrapper}>
        <Image source={this.props.source} style={loginInput.inlineImg}/>
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
