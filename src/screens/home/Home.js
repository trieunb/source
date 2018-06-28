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
import HeaderComponent from '../../app/components/HeaderComponent'
import { form } from '../../app/stylesheet/Common';
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
class Home extends Component {
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
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Icon name="md-home"/>
    )
  })
  render() {
    const {navigation} = this.props;
    const { selectedItems } = this.state;
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
        <HeaderComponent title="Home" drawerOpen={() => this.props.navigation.toggleDrawer()} />
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
      </KeyboardAvoidingView>
    )
  }
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  items: {
    marginRight: 20,
    marginLeft: 20,
    height: 50
  },
});
