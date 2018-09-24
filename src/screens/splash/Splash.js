/**
*| Component      : User
*| Author       	: ANS806 - trieunb@ans-asia.com
*| Created date 	: 2018-06-11
*| Description   	:
*/
/*============================================================================*/

import React, { Component } from  'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Splash extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>WelCome To ANS-ASIA</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#34495e',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
})