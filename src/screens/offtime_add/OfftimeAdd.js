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
  TouchableHighlight,
  Dimensions, Platform
} from "react-native";
import {
  Input, Icon, Button, Container, Header, Content,
  Left, Card, CardItem, Thumbnail, Body, Item, Label,
  Picker, Form
} from 'native-base'
import DatePicker from 'react-native-datepicker';

/*============================================================================*/
//import component
class OfftimeAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected3: "key3",
      date:"2016-05-15",
      dates:"2016-05-15",
    };
  }
  onValueChange3(value: string) {
    this.setState({
      selected3: value
    });
  }
  static navigationOptions = ({ navigation }) => ({
    title: 'Offtime Add',
    headerTitleStyle: {
      width: '78%',
      textAlign: 'center',
    },
  })

  render() {
    return (
      <Container>
        <Content>
        <Form>
          <Item floatingLabel style={styles.items}>
            <Icon active name='person' />
            <Label>Requester</Label>
            <Input />
          </Item>
          <Item floatingLabel style={styles.items}>
            <Icon active name='clock' />
            <Label>Remainning hours</Label>
            <Input />
          </Item>
          <Item floatingLabel style={styles.items}>
            <Icon active name='checkmark-circle' />
            <Label>Approve</Label>
            <Input />
          </Item>
          <Item style={styles.items}>
            <Label style={{width: 120}}>Date off type</Label>
            <Picker
                mode="dropdown"
                iosHeader="Your Header"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{
                  width: Platform.OS === "ios" ? undefined : '70%',
                  marginRight: 20
                }}
                selectedValue={this.state.selected3}
                onValueChange={this.onValueChange3.bind(this)}
              >
                <Picker.Item label="Wallet" value="key0" />
                <Picker.Item label="ATM Card" value="key1" />
                <Picker.Item label="Debit Card" value="key2" />
                <Picker.Item label="Credit Card" value="key3" />
                <Picker.Item label="Net Banking" value="key4" />
            </Picker>
          </Item>
          <Item style={styles.items}>
          <Label style={{width: 100}}>From date</Label>
            <DatePicker
              style={{
                width: 200,
                marginLeft: 20
              }}
              date={this.state.date}
              mode="date"
              placeholder="Date off"
              format="YYYY/MM/DD"
              minDate="2016-05-01"
              maxDate="2016-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36,
                  height: 30,
                  width:100
                }
              }}
              onDateChange={(date) => {this.setState({date: date})}}
            />
          </Item>
          <Item style={styles.items}>
          <Label style={{width: 100}}>To date</Label>
            <DatePicker
              style={{
                width: 200,
                marginLeft: 20
              }}
              date={this.state.dates}
              mode="date"
              placeholder="Date off"
              format="YYYY/MM/DD"
              minDate="2016-05-01"
              maxDate="2016-06-01"
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              customStyles={{
                dateIcon: {
                  position: 'absolute',
                  left: 0,
                  top: 4,
                  marginLeft: 0
                },
                dateInput: {
                  marginLeft: 36,
                  height: 30,
                  width:100
                }
              }}
              onDateChange={(date) => {this.setState({dates: date})}}
            />
          </Item>
          <Item floatingLabel style={styles.items}>
            <Icon active name='clock' />
            <Label>Reason</Label>
            <Input />
          </Item>
          <Item floatingLabel style={styles.items}>
            <Icon active name='alert' />
            <Label>Note</Label>
            <Input />
          </Item>
          <Button block rounded success
              style={styles.btnSave}
            >
            <Text>Save</Text>
          </Button>
        </Form>
        </Content>
      </Container>
    )
  }
}

export default OfftimeAdd;

const styles = StyleSheet.create({
  items: {
    marginRight: 20,
    marginLeft: 20
  },
  btnSave: {
    margin: 20,
  }
});
