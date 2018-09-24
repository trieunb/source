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
  View, Text, Image, FlatList, Modal, TouchableHighlight, StyleSheet, Dimensions,
  KeyboardAvoidingView
} from "react-native";
import {
  Icon, Button, Container, Header, Content, Left, Item, DatePicker, Form,
  Picker, Fab, Input, Label, Right, Body, Title, ListItem, CheckBox
} from 'native-base';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
/*============================================================================*/
//import component
import { form } from '../../../app/stylesheet/Common';

const width   = Dimensions.get('window').width;
const height  = Dimensions.get('window').height;

const items = [
  {
      name: "Le Quyen Vu",
      id: 10,
    },{
      name: "Quyen Van Xa",
      id: 17,
    },{
      name: "Pineapple",
      id: 13,
    },{
      name: "Banana",
      id: 14,
    },{
      name: "Watermelon",
      id: 15,
    },{
      name: "Kiwi fruit",
      id: 16,
    }
]

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
      dateTo        : '',
      selectedItems : [],
      selected1     : "key1",
      checked       : false
    };
  }
  onSelectedItemsChange = (selectedItems) => {
    this.setState({ selectedItems });
  }
  onValueChange(value: string) {
    this.setState({
      selected1: value
    });
  }
  changeCheckbox(chk) {
    this.setState({checked:chk})
  }
  render() {
    const { selectedItems } = this.state;
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
        <Form>
          <Item floatingLabel style={form.input}>
            <Icon active name='person' />
            <Label>Requester</Label>
            <Input />
          </Item>
          <View style={form.groupDateFromTo}>
            <Item style={form.inputDate}>
              <Icon active name='calendar' />
              <DatePicker
                date={this.state.dateFrom}
                mode="date"
                defaultDate={new Date(this.state.year, this.state.month, this.state.day)}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                animationType={"fade"}
                androidMode={"default"}
                placeHolderText="Date From"
                onDateChange={(date) => {this.setState({dateFrom: date})}}
              />
            </Item>
            <Item style={form.inputDate}>
              <Icon active name='calendar' />
              <DatePicker
                date={this.state.dateTo}
                mode="date"
                defaultDate={new Date(this.state.year, this.state.month, this.state.day)}
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
          <View style={form.inputSelectMultip}>
            <SectionedMultiSelect
              items={items}
              uniqueKey='id'
              selectText='Choose some things...'
              onSelectedItemsChange={this.onSelectedItemsChange}
              selectedItems={this.state.selectedItems}
            />
          </View>
          <Item style={form.inputDate}>
            <Icon active name='calendar' />
            <DatePicker
              date={this.state.dateFrom}
              mode="date"
              defaultDate={new Date(this.state.year, this.state.month, this.state.day)}
              locale={"en"}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={"fade"}
              androidMode={"default"}
              placeHolderText="Date From"
              onDateChange={(date) => {this.setState({dateFrom: date})}}
            />
          </Item>
          <Item style={form.input}>
            <Icon active name='person' />
            <Picker
              iosHeader="Select one"
              mode="dropdown"
              selectedValue={this.state.selected1}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Wallet" value="key0" />
              <Picker.Item label="ATM Card" value="key1" />
              <Picker.Item label="Debit Card" value="key2" />
              <Picker.Item label="Credit Card" value="key3" />
              <Picker.Item label="Net Banking" value="key4" />
            </Picker>
          </Item>
          <ListItem style={form.input}>
            <CheckBox
              checked={this.state.checked}
              onPress={()=>this.changeCheckbox(!this.state.checked)}
            />
            <Body style={form.checkBoxBody}>
              <Text>Discussion with Client</Text>
            </Body>
          </ListItem>
          <Item floatingLabel style={form.input}>
            <Icon active name='person' />
            <Label>Requester</Label>
            <Input />
          </Item>
          <Button block rounded success
              style={form.btn}
              onPress={()=>{console.log('search')}}
            >
            <Text
              style={form.btnText}>
              Save</Text>
          </Button>
        </Form>
      </View>
    )
  }
}
