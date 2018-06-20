import React, { Component } from 'react';

class Layout extends Component<Props> {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title') || 'Home',
            headerTintColor: '#fff',
            headerStyle: {
              backgroundColor: '#37474F'
            },
        };
    };
}

export default Layout;