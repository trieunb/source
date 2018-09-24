/**
*| Component        :   StactNavication
*| Author       	:   ANS806 - trieunb@ans-asia.com
*| Created date 	:   2018-06-11
*| Description   	:   StactNavication between offtime list and  edit
*/
/*============================================================================*/
//import library
import React, { Component }     from "react";
import { Icon }                 from 'native-base';
import { createStackNavigator } from 'react-navigation'
/*============================================================================*/
//import component
import Offtime              from './Offtime';
import AddFlextime          from '../flextime/AddFlextime';
import EditFlextime         from '../flextime/EditFlextime';
import AddDayOff            from '../dayoff/AddDayOff';
import EditDayOff            from '../dayoff/EditDayOff';
// import styles
import { COLOR_MAIN }       from '../../app/stylesheet/Common';

const OfftimeStackNavigation = createStackNavigator(
    {
        Offtime: {
            screen: Offtime,
        },
        AddFlextime: {
            screen: AddFlextime,
        },
        EditFlextime: {
            screen: EditFlextime
        },
        AddDayOff: {
            screen: AddDayOff
        },
        EditDayOff: {
            screen: EditDayOff
        },
    }
);

export default OfftimeStackNavigation;