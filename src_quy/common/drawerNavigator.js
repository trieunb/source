import Navigator from './stackNavigator';
import {DrawerNavigator} from 'react-navigation';
import LoginScreen from '../screens/login/Login';
import SideMenu from './components/sideMenu/menu';

export default DrawerNavigator({
    Navigator: { screen: Navigator},
    Login: { screen: LoginScreen}
}, {
    contentComponent: SideMenu,
    drawerWidth: 300,
    initialRouteName: 'Login',
});