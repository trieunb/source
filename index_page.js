import React, { Component } from 'react';

import { AppRegistry, YellowBox, View } from 'react-native';
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
// import Login from './src/pages/login/Login';
import Routes from './Routes.js'
// import Home from './src/pages/home/Home';
// import App from './App';

class MyApp extends Component {
   render() {
      return (
         <Routes />
      )
   }
}
export default MyApp

AppRegistry.registerComponent('source', () => MyApp);
