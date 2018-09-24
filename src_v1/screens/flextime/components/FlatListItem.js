/**
*| Component      : Test
*| Author       	: ANS806 - trieunb@ans-asia.com
*| Created date 	: 2018-06-25
*| Description   	:
*/
/*============================================================================*/
//import library
import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity
} from "react-native";

import {
  Icon, Button, Container, Header,
  Content, Left, Item, DatePicker, Form,
  Picker
} from 'native-base';
import { PATH_UPLOAD } from '../../../app/constants';
/*============================================================================*/
//import component
import styles from '../stylesheet/FlatListItem';
/*============================================================================*/
//export component
export default class FlatListItem extends Component{
  render() {
    const listOfftime = this.props.item;
    const avatar      = listOfftime.avatar ? {uri: PATH_UPLOAD+listOfftime.employee_id+'/'+listOfftime.avatar} : require('../../../images/no_avatar.jpg');
    let icon;
    let approve;
    if (this.props.item.approval_status) {
      icon = <Icon name="md-checkmark" style={{fontSize: 20, color: '#3498db', margin: 3}}/>
    } else {
      icon = <Icon name="md-close" style={{fontSize: 20, color: '#e74c3c', margin: 3}}/>
      approve = <TouchableOpacity style={styles.flatListItemBtn}>
                  <Text style={styles.textApprove}>
                    Approve
                  </Text>
                </TouchableOpacity>
    }
    return (
      <View style={styles.containerFlatList}>
        <View style={styles.containerItem}>
          <Image
            source={avatar}
            style={styles.avatar}
          >
          </Image>
          <View style={styles.containerContent}>
            <Text style={styles.flatListItem}>
              <Text
                style={styles.textUser}
              >
                {listOfftime.employee_id}: {listOfftime.employee_full_name} - {listOfftime.flextime_type}
              </Text>
            </Text>
            {<Text style={styles.flatListItem}>
              {listOfftime.date_to}{listOfftime.flextime_hours==''?'':' - '+listOfftime.flextime_hours}
            </Text>}
            <Text style={styles.flatListItem}>
              {listOfftime.reason}
            </Text>
            {<View style={styles.itemApprove}>
              {icon}
              <Text style={styles.flatListItem}>
                {listOfftime.approval_status ? 'approved' : 'Chưa approve'}
              </Text>
              {approve}
            </View>}
          </View>
        </View>
        <View
          style={styles.borderLine}>
        </View>
      </View>
    );
  }
}
