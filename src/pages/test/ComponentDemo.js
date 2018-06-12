// Import library
import React, { Component } from 'react';
import {
  	Text,
  	View
} from 'react-native';

export default class ComponentDemo extends Component{
	render(){
		return(
			<View>
				<Text style={{ backgroundColor: 'yellow', padding: 10, color: 'black' }}>
					{this.props.name} - {this.props.dob}
				</Text>
			</View>
		);
	}
}