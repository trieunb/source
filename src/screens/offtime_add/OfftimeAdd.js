/**
*| Component      : App
*| Author       	: ANS806 - trieunb@ans-asia.com
*| Created date 	: 2018-06-11
*| Description   	:
*/
/*============================================================================*/
//import library
import React, { Component } from "react";
import {
  Input, Icon, Button, Container, Header, Content,
  Left, Card, CardItem, Thumbnail, Body, Item, Label
} from 'native-base'
/*============================================================================*/
//import component
class OfftimeAdd extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Offtime Add'
  })
  render() {
    return (
      <Container>
        <Content>
          <Item floatingLabel>
            <Icon active name='person' />
            <Label>Requester</Label>
            <Input />
          </Item>
          <Item floatingLabel>
            <Icon active name='clock' />
            <Label>Remainning hours</Label>
            <Input />
          </Item>
        </Content>
      </Container>
    )
  }
}

export default OfftimeAdd;
