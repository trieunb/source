/**
*| Component      : App
*| Author       	: ANS806 - trieunb@ans-asia.com
*| Created date 	: 2018-06-11
*| Description   	:
*/
/*============================================================================*/
//import library
import { createStackNavigator } from 'react-navigation'

/*============================================================================*/
//import component
import Offtime from './Offtime';
import OfftimeAdd from '../offtime_add/OfftimeAdd';

const OfftimeStackNavigator = createStackNavigator({
  Offtime: {
      screen: Offtime,
    },
  OfftimeAdd: {
    screen: OfftimeAdd,
  },
});

export default OfftimeStackNavigator;
