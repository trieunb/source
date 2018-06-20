/**
*| Component      : Main
*| Author       	: ANS806 - trieunb@ans-asia.com
*| Created date 	: 2018-06-11
*| Description   	:
*/
/*============================================================================*/
//import library
import { AppRegistry, YellowBox } from 'react-native';
import App from './App';
//import component

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);
//register app
AppRegistry.registerComponent('source', () => App);
