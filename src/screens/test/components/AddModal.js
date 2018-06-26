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
  View, Text, Image, FlatList, Modal, TouchableHighlight, StyleSheet, Dimensions
} from "react-native";
import {
  Icon, Button, Container, Header, Content, Left, Item, DatePicker, Form,
  Picker, Fab, Input, Label, Right, Body, Title
} from 'native-base';
/*============================================================================*/
//import component

const width   = Dimensions.get('window').width;
const height  = Dimensions.get('window').height;
/*============================================================================*/
//export component
export default class Add extends Component {
  constructor(props) {
    super(props)
    this.state = {
      year          : (new Date).getFullYear(),
      month         : (new Date).getMonth(),
      day           : (new Date).getDate(),
      dateFrom      : '',
      dateTo        : ''
    };
  }
  render() {
    return(
      <View>
        <Header>
          <Body>
            <Title>Add New</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => {
              this.props.showModal()
            }}>
              <Icon name="close-circle" />
            </Button>
          </Right>
        </Header>
        <View>
          <Form style={{
              flex: 1,
              flexDirection: 'column',
              height: '100%'
            }}>
            <Item floatingLabel style={styles.items}>
              <Icon active name='person' />
              <Label>Requester</Label>
              <Input />
            </Item>
            <View
              style={{
                flex: 1,
                flexDirection: 'row'
              }}
            >
              <Item style={styles.itemsDate}>
                <Icon active name='calendar' />
                <DatePicker
                  date={this.state.dateFrom}
                  mode="date"
                  defaultDate={new Date(this.state.year, this.state.month, this.state.day)}
                  // minimumDate={new Date(2018, 1, 1)}
                  // maximumDate={new Date(2018, 12, 31)}
                  locale={"en"}
                  timeZoneOffsetInMinutes={undefined}
                  modalTransparent={false}
                  animationType={"fade"}
                  androidMode={"default"}
                  placeHolderText="Date From"
                  onDateChange={(date) => {this.setState({dateFrom: date})}}
                />
              </Item>
              <Item style={styles.itemsDate}>
                <Icon active name='calendar' />
                <DatePicker
                  date={this.state.dateTo}
                  mode="date"
                  defaultDate={new Date(this.state.year, this.state.month, this.state.day)}
                  // minimumDate={new Date(2018, 1, 1)}
                  // maximumDate={new Date(2018, 12, 31)}
                  locale={"en"}
                  timeZoneOffsetInMinutes={undefined}
                  modalTransparent={false}
                  animationType={"fade"}
                  androidMode={"default"}
                  placeHolderText="Date To"
                  onDateChange={(date) => {this.setState({dateTo: date})}}
                />
              </Item>
            </View>
            <Button block rounded success
                style={styles.btnSearch}
                onPress={()=>{console.log('search')}}
              >
              <Text
                style={{
                  color: 'white',
                  fontWeight: '700'
                }}>
                Save</Text>
            </Button>
          </Form>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  items: {
    marginRight: 20,
    marginLeft: 20,
    height: 50
  },
  itemsDate:{
    marginRight: 20,
    marginLeft: 20,
    height: 50,
    width: 150
  },
  btnSearch: {
    margin: 20,
    position: 'relative',
    top: 50,
    width: width-'10%',
  }
});
