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
  Image
} from "react-native";

import { Icon, Button, Container, Header, Content, Left, Item, DatePicker, Form, Picker } from 'native-base'
/*============================================================================*/
//import component
import HeaderComponent from '../../app/components/HeaderComponent'

class Meeting extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: "Meeting",
    headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
    drawerLabel: 'Meeting',
    drawerIcon: ({ tintColor }) => (
      <Icon name="md-clock"/>
    ),
  })
  constructor(props) {
    super(props);
    this.state = {
      year: (new Date).getFullYear(),
      month : (new Date).getMonth(),
      day : (new Date).getDate(),
      selected1: "key0"
    };
  }
  onValueChange(value: string) {
      this.setState({
        selected1: value
      });
    }
  render() {
    return (
      <Container>
        <HeaderComponent title="Meeting" drawerOpen={() => this.props.navigation.toggleDrawer()} />
        <Content>
            <DatePicker
            defaultDate={new Date(this.state.year, this.state.month, this.state.day)}
            //minimumDate={new Date(this.state.year, 0, 1)}
            //maximumDate={new Date(this.state.year, 11, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            androidMode={"default"}
            placeHolderText={this.state.day + '/' + this.state.month + '/' + this.state.year }
            />
          
            <Picker
              renderHeader={backAction =>
                <Header style={{ backgroundColor: "#f44242" }}>
                  <Left>
                    <Button transparent onPress={backAction}>
                      <Icon name="arrow-back" style={{ color: "#fff" }} />
                    </Button>
                  </Left>
                  <Body style={{ flex: 3 }}>
                    <Title style={{ color: "#fff" }}>Your Header</Title>
                  </Body>
                  <Right />
                </Header>}
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ width: undefined }}
              selectedValue={this.state.selected1}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
        </Content>
      </Container>
    )
  }
}

export default Meeting;

const styles = StyleSheet.create({
  items: {
    marginRight: 20,
    marginLeft: 20
  },
  btnSave: {
    margin: 20,
  }
});
