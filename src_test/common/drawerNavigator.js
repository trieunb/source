import Navigator from './stackNavigator';
import {DrawerNavigator} from 'react-navigation';
import SideMenu from './components/sideMenu/menu';

export default DrawerNavigator({
    Navigator: {
        screen: Navigator
    }
}, {
    contentComponent: SideMenu,
    drawerWidth: 300
});