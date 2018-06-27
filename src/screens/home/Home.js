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
import { Icon, Button, Container, Header, Content, Left } from 'native-base'
import MultiSelect from 'react-native-multiple-select';
/*============================================================================*/
//import component
import HeaderComponent from '../../app/components/HeaderComponent'
const items = [{
    id: '92iijs7yta',
    name: 'Ondo',
  }, {
    id: 'a0s0a8ssbsd',
    name: 'Ogun',
  }, {
    id: '16hbajsabsd',
    name: 'Calabar',
  }, {
    id: 'nahs75a5sg',
    name: 'Lagos',
  }, {
    id: '667atsas',
    name: 'Maiduguri',
  }, {
    id: 'hsyasajs',
    name: 'Anambra',
  }, {
    id: 'djsjudksjd',
    name: 'Benue',
  }, {
    id: 'sdhyaysdj',
    name: 'Kaduna',
  }, {
    id: 'suudydjsjd',
    name: 'Abuja',
  }];
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedItems : []
    };
  }
  static navigationOptions = ({ navigation }) => ({
    // title: "Hello",
    // headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Icon name="md-home"/>
    )
  })
  onSelectedItemsChange = selectedItems => {
    this.setState({ selectedItems });
  };
  render() {
    const {navigation} = this.props;
    const { selectedItems } = this.state;
    return (
      <Container>
        <HeaderComponent title="Home" drawerOpen={() => this.props.navigation.toggleDrawer()} />
        <Content>
        <View style={{ flex: 1 }}>
          <MultiSelect
            hideTags
            items={items}
            uniqueKey="id"
            ref={(component) => { this.multiSelect = component }}
            onSelectedItemsChange={this.onSelectedItemsChange}
            selectedItems={selectedItems}
            selectText="Pick Items"
            searchInputPlaceholderText="Search Items..."
            onChangeInput={ (text)=> console.log(text)}
            altFontFamily="ProximaNova-Light"
            tagRemoveIconColor="#CCC"
            tagBorderColor="#CCC"
            tagTextColor="#CCC"
            selectedItemTextColor="#CCC"
            selectedItemIconColor="#CCC"
            itemTextColor="#000"
            displayKey="name"
            searchInputStyle={{ color: '#CCC' }}
            submitButtonColor="#CCC"
            submitButtonText="Submit"
          />
          <View>
            {this.multiSelect && this.multiSelect.getSelectedItemsExt(selectedItems)}
          </View>
        </View>
        </Content>
      </Container>
    )
  }
}

export default Home;
