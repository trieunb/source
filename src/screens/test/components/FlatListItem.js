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
  FlatList
} from "react-native";

import {
  Icon, Button, Container, Header,
  Content, Left, Item, DatePicker, Form,
  Picker
} from 'native-base';
/*============================================================================*/
//import component
import styles from '../stylesheet/FlatListItem';
/*============================================================================*/
//export component
export default class FlatListItem extends Component{
  render() {
    let icon;
    if (this.props.item.approve) {
      icon = <Icon name="md-checkmark" style={{fontSize: 20, color: '#3498db', margin: 3}}/>
    } else {
      icon = <Icon name="md-close" style={{fontSize: 20, color: '#e74c3c', margin: 3}}/>
    }
    return (
      <View style={styles.containerFlatList}>
        <View style={styles.containerItem}>
          <Image
            source={this.props.item.avatar}
            style={styles.avatar}
          >
          </Image>
          <View style={styles.containerContent}>
            <Text style={styles.flatListItem}>
              <Text
                style={styles.textUser}
              >
                {this.props.item.key}: {this.props.item.name} -
              </Text>
              {this.props.item.type == 1 ? ' Nghỉ phép' : ' Nghỉ phép nữa ngày'}
            </Text>
            <Text style={styles.flatListItem}>
              {this.props.item.dateFrom}{this.props.item.type == 1 ? '; ' + this.props.item.dateTo : ''}
            </Text>
            <Text style={styles.flatListItem}>
              {this.props.item.note}
            </Text>
            <View style={styles.itemApprove}>
              {icon}
              <Text style={styles.flatListItem}>
                {this.props.item.approve ? 'approved' : 'Chưa approve'}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={styles.borderLine}>
        </View>
      </View>
    );
  }
}
