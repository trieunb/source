import React from 'react'
import { Router, Scene } from 'react-native-router-flux'
import Login from './src/pages/login/Login'
import Home from './src/pages/home/Home'

const Routes = () => (
   <Router>
      <Scene key = "root">
         <Scene key = "login" component = {Login} title = "Login" initial = {true} />
         <Scene key = "home" component = {Home} title = "Home" />
      </Scene>
   </Router>
)
export default Routes