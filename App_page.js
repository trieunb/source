import React, { Component } from 'react';

import {
  StackNavigator
} from 'react-navigation';

import Login from './src/pages/login/Login';
import Home from './src/pages/home/Home';
// import App from './App';

const MyApp   = StackNavigator({
  Login :   { screen : Login},
  Home  :   { screen : Home}
});

export default class App extends Component {
  render() {
    return(
      <MyApp />
    )
  }
}