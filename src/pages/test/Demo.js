// Import library
import React, { Component } from 'react';
import {
	AppRegistry,
	StyleSheet,
  	Text,
  	TextInput,
  	Button,
  	Image,
  	ImageBackground,
  	Dimensions,
  	TouchableOpacity,
  	View
} from 'react-native';
import ComponentDemo from "./ComponentDemo";

export default class Demo extends Component {
  render() {
    return(
      <View>
        <ComponentDemo name="Ronado" />
        <ComponentDemo name="Messi" dob="2000"/>
      </View>
    );
  }
}