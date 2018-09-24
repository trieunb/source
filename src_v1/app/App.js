import React, { Component } from 'react';
import {
  AsyncStorage
} from 'react-native';
import {
  createDrawerNavigator,
  StackNavigator,
  createStackNavigator,
  DrawerItems,
  SafeAreaView
} from 'react-navigation'
/*============================================================================*/
//import component
import Login            from '../screens/login/Login';
import DrawerNavigator  from './components/DrawerNavigator';
import { getUser } 	from './api/auth';

const RootNav = createStackNavigator({
  DrawerNavigator   : { screen: DrawerNavigator },
  Login             : { screen: Login },
},{
    // Default config for all screens
    headerMode: 'none',
    title: 'Main',
    initialRouteName: 'Login',
  });

const RootNavLogged = createStackNavigator({
  DrawerNavigator   : { screen: DrawerNavigator },
  Login             : { screen: Login },
},{
    // Default config for all screens
    headerMode: 'none',
    title: 'Main',
    initialRouteName: 'DrawerNavigator',
  });
  
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userLogged  : false,
      token       : ''
    };
  }
  async componentWillMount() {
    await AsyncStorage.getItem('token').then((token) => {
      if (token) {
        this.setState({ userLogged : true });
      } else {
        console.log('No user yet Login');
      }
    })
  }
  render(){
    const isLogin = this.state.userLogged
    if (isLogin == true ){
      return (
        <RootNavLogged />
      ) 
    } else {
        return(
          <RootNav />
        ) 
      }
  }
}

export default App;
