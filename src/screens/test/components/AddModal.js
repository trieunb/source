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
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
/*============================================================================*/
//import component

const width   = Dimensions.get('window').width;
const height  = Dimensions.get('window').height;

const items = [
  {
      name: "Apple",
      id: 10,
    },{
      name: "Strawberry",
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
      selectedItems: [],
    };
  }
  onSelectedItemsChange = (selectedItems) => {
    this.setState({ selectedItems });
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
          <Item floatingLabel style={styles.input}>
            <Icon active name='person' />
            <Label>Requester</Label>
            <Input />
          </Item>
          <View style={styles.groupDateFromTo}>
            <Item style={styles.inputDate}>
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
            <Item style={styles.inputDate}>
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
          <View style={styles.inputSelectMultip}>
            <Icon active name='person' />
            <SectionedMultiSelect
              style={styles.selectMult}
              items={items}
              uniqueKey='id'
              selectText='Choose some things...'
              onSelectedItemsChange={this.onSelectedItemsChange}
              selectedItems={this.state.selectedItems}
            />
          </View>
          <Item floatingLabel style={styles.input}>
            <Icon active name='person' />
            <Label>Requester</Label>
            <Input />
          </Item>
          <Button block rounded success
              style={styles.btn}
              onPress={()=>{console.log('search')}}
            >
            <Text
              style={{
                color: 'white',
                fontWeight: '700'
              }}>
              Search</Text>
          </Button>
        </Form>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  input: {
    marginRight: 20,
    marginLeft: 20,
  },
  inputSelectMultip:{
    top: 50,
    position: 'relative',
    paddingTop: 20,
    paddingBottom: 40,
    paddingHorizontal: 15
  },
  selectMult:{
    width: 200,
  },
  groupDateFromTo:{
    flex: 1,
    flexDirection: 'row'
  },
  inputDate:{
    marginRight: 20,
    marginLeft: 20,
    height: 50,
    width: 150
  },
  btn: {
    margin: 20,
    position: 'relative',
    top: 50,
    width: width-'10%',
  }
});
