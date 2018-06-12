/**
*| Component      : User
*| Author       	: ANS806 - trieunb@ans-asia.com
*| Created date 	: 2018-06-11
*| Description   	:
*/
/*============================================================================*/
//import library
import React, { Component } from 'react';
import {
    Container, Content,
    Text, Icon,
    Card, CardItem, Thumbnail, Body, Left, Right, Button, List, ListItem
} from 'native-base';
import { Image } from 'react-native';
/*============================================================================*/
//export class User component
export default class UserComponent extends Component {
  render() {
    return(
      <List>
        <ListItem>
            <Thumbnail
              source={this.props.avatar}
            />
            <Body>
              <Text>{this.props.name}</Text>
              <Text note>{this.props.date}</Text>
            </Body>
        </ListItem>
      </List>
    );
  }
}
