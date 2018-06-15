import { StackNavigator } from 'react-navigation';
import HomeScreen from '../screens/home/Home';
import OfftimeScreen from '../screens/offtime/Offtime';
import MeetingScreen from '../screens/meeting/Meeting';

const Navigator = StackNavigator(
    {
        Home: { screen: HomeScreen },
        Meeting: { screen: MeetingScreen },
        Offtime: { screen: OfftimeScreen },
    }
);

export default Navigator
