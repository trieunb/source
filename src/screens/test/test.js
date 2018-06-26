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
  FlatList,
  Modal
} from "react-native";

import {
  Icon, Button, Container, Header,
  Content, Left, Item, DatePicker, Form,
  Picker, Fab
} from 'native-base';
import { SearchBar } from 'react-native-elements'
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
      active: false,
      modalVisible: false,
    };
  }
  static navigationOptions = ({ navigation }) => ({
    title: "Test",
    drawerLabel: 'Test',
    drawerIcon: ({ tintColor }) => (
      <Icon name="md-clock"/>
    ),
  })
  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  render() {
    return (
      <Container>
        <HeaderComponent
          title="Test"
          drawerOpen={() => this.props.navigation.toggleDrawer()}
        />
        <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        </View>
        <View style={{ flex: 1 }}>
          <SearchBar
            round
            lightTheme
            icon={{ type: 'font-awesome', name: 'search' }}
            placeholder='Type Here...' />
          <Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ zIndex: 9999, height: 300, marginBottom: 100}}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="share" />
            <Button
              style={{ backgroundColor: '#34A34F' }}
              onPress={() => {
                this.setModalVisible(true);
              }}
            >
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
