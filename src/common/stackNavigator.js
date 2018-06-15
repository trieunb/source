import { StackNavigator } from 'react-navigation';
import LoginScreen from '../screens/login/Login';
import HomeScreen from '../screens/home/Home';
import OfftimeScreen from '../screens/offtime/Offtime';
import MeetingScreen from '../screens/meeting/Meeting';

const Navigator = StackNavigator(
    {
        Login: { screen: LoginScreen },
        Home: { screen: HomeScreen },
        Meeting: { screen: MeetingScreen },
        Offtime: { screen: OfftimeScreen },
    },
    {
        initialRouteName: 'Home',
    },
);

export default Navigator
