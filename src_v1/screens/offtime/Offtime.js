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
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight
} from "react-native";
import {
  Input, Icon, Button, Container, Header, Content,
  Left, Card, CardItem, Thumbnail, Body, Item
} from 'native-base'
import { createStackNavigator } from 'react-navigation'

import avatar    from '../../images/img_avatar.jpg';
/*============================================================================*/
//import component
import HeaderComponent from '../../app/components/HeaderComponent'
// import OfftimeAdd from '../offtime_add/OfftimeAdd';

class Offtime extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null,
    title: 'Offtime'
  })
  render() {
    return (
      <Container>
        <HeaderComponent
          title="Offtime"
          drawerOpen={() => this.props.navigation.toggleDrawer()}
          rightHeader={
            <TouchableHighlight
                onPress={() => {this.props.navigation.navigate('OfftimeAdd')}}
              >
              <Icon name="add" />
            </TouchableHighlight>
          }/>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={avatar} />
                <Body>
                  <Text>793: Lê Quan Vũ - Nghỉ phép</Text>
                  <Text note>2018/06/06</Text>
                  <Text note>Chưa Approve</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={avatar} />
                <Body>
                  <Text>768: Trần Thanh Hà - Nghỉ phép nửa ngày</Text>
                  <Text note>2018/06/06</Text>
                  <Text note>Đã Approve</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={avatar} />
                <Body>
                  <Text>768: Võ Đình Kỳ - Nghỉ phép nửa ngày</Text>
                  <Text note>2018/06/06</Text>
                  <Text note>Đã Approve</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}
export default Offtime;
