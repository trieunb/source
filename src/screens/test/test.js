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
  Picker, Fab
} from 'native-base';
/*============================================================================*/
//import component
import HeaderComponent  from '../../app/components/HeaderComponent';
import testData         from '../../data/test';
import FlatListItem     from './components/FlatListItem';
/*============================================================================*/
//export component
export default class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false
    };
  }
  static navigationOptions = ({ navigation }) => ({
    title: "Test",
    drawerLabel: 'Test',
    drawerIcon: ({ tintColor }) => (
      <Icon name="md-clock"/>
    ),
  })
  render() {
    return (
      <Container>
        <HeaderComponent
          title="Test"
          drawerOpen={() => this.props.navigation.toggleDrawer()}
        />
        <View style={{ flex: 1 }}>
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ zIndex: 9999, height: 300, marginBottom: 100}}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="share" />
            <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon name="md-search" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="add-circle" />
            </Button>
          </Fab>
          <Content>
            <FlatList
              data={testData}
              renderItem={({item, index}) => {
                // console.log(JSON.stringify(item), index)
                return(
                  <FlatListItem
                    item={item} index={index}
                  >
                  </FlatListItem>
                );
              }}
            >
            </FlatList>
          </Content>
        </View>
      </Container>
    )
  }
}
