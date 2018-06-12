/**
*| Component      : Routes
*| Author       	: ANS806 - trieunb@ans-asia.com
*| Created date 	: 2018-06-12
*| Description   	:
*/
/*============================================================================*/
//import library
import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
/*============================================================================*/
//import component
import Login  from './auth/components/Login';
import Main   from './Main';
/*============================================================================*/
//export class
export default class Routes extends Component<{}> {
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
			      <Scene key="login" component={Login} title="Login" initial={true}/>
			      <Scene key="main" component={Main} title="Main" />
			    </Stack>
			 </Router>
			)
	}
}
