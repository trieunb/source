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
import { SearchBar } from 'react-native-elements'
/*============================================================================*/
//import component
import HeaderComponent  from '../../app/components/HeaderComponent';
import testData         from '../../data/test';
import FlatListItem     from './components/FlatListItem';
import Search           from './components/SearchModal';
import Add              from './components/AddModal';

const width   = Dimensions.get('window').width;
const height  = Dimensions.get('window').height;
/*============================================================================*/
//export component
export default class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      active              : false,
      modalSearchVisible  : false,
      modalAddVisible     : false,
    };
  }
  static navigationOptions = ({ navigation }) => ({
    title: "Test",
    drawerLabel: 'Test',
    drawerIcon: ({ tintColor }) => (
      <Icon name="md-clock"/>
    ),
  })
  setModalVisible(visible, isModal) {
    switch (isModal) {
      case 'Search':
        this.setState({modalSearchVisible: visible});
        break;
      case 'Add':
        this.setState({modalAddVisible: visible});
        break;
      default:

    }
    // this.setState({modalVisible: visible});
    // this.setState({modalAddVisible: visible});
  }
  render() {
    return (
      <Container>
        <HeaderComponent
          title="Test"
          drawerOpen={() => this.props.navigation.toggleDrawer()}
        />
        <View>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalSearchVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <Search showModal={() => {this.setModalVisible(!this.state.modalSearchVisible, 'Search')}}/>
          </Modal>
        </View>
        <View>
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalAddVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <Add showModal={() => {this.setModalVisible(!this.state.modalAddVisible, 'Add')}}/>
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
                this.setModalVisible(true, 'Search');
              }}
            >
              <Icon name="md-search" />
            </Button>
            <Button
              style={{ backgroundColor: '#3B5998' }}
              onPress={() => {
                this.setModalVisible(true, 'Add');
              }}
            >
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

const styles = StyleSheet.create({

});
