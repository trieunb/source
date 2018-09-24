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
}   from 'react-navigation'
import { connect } from 'react-redux';
/*============================================================================*/
//import redux action
import { checkToken }       from './actions/authAction'
//import component
import Login                from '../screens/login/Login';
import DrawerNavigator      from './components/DrawerNavigator';
import { getUser }          from './api/auth';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initRoute : 'Login'
        }
    }
    // componentWillMount = () => {
    //     this.checkLogin();
    // }
    // checkLogin = async() => {
    //     const token = await AsyncStorage.getItem('token');
    //     if (token) {
    //         await this.props.checkLogin(token);
    //         await this.setState({
    //             initRoute : 'DrawerNavigator'
    //         });
    //     }
    // }
    // componentDidMount = () => {
    //     this.setState({
    //         initRoute : 'Login'
    //     });
    // }
    render() {
        const { initRoute } = this.state;
        const AppStackNavigator = createStackNavigator({
            DrawerNavigator: { screen: DrawerNavigator },
            Login: { screen: Login },
        }, {
            // Default config for all screens
            headerMode: 'none',
            title: 'Main',
            initialRouteName: initRoute,
        });
        return (
            <AppStackNavigator/>
        )
    }
}

// export default App;

/*============================================================================*/
const mapStateToProps = (state, ownProps) => {
    return {
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        checkLogin: (token) => { dispatch(checkToken(token)) },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
/*============================================================================*/