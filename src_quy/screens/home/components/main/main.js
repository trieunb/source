/**
*| Screen         : Home
*| Author       	: ANS809 - quypn@ans-asia.com
*| Created date 	: 2018-06-14
*| Description   	: Main view for home screen
*/
/*============================================================================*/
// import library
import React, { Component } from 'react';
import { View } from "react-native";
import {Button} from 'react-native-elements';
// import style
import styles from './styles';

class Main extends Component<Props> {

    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="Goto Meeting Screen"
                    backgroundColor="#00bcd4"
                    onPress={() => this.props.navigation.navigate('Meeting', {title : 'Meeting room'})}/>
            </View>
        );
    }
}

export default Main;
