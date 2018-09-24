import React, { Component } from 'react';
import {
  View,
   Text,
   StyleSheet,
   ScrollView,
   Image,
   TouchableOpacity,
   AsyncStorage
} from 'react-native';

import {
  Container, Content, Icon,
  Header, Body, Card, CardItem,
  Left, Thumbnail
} from 'native-base'
import {
  createDrawerNavigator, StackNavigator,
  createStackNavigator, DrawerItems, SafeAreaView
} from 'react-navigation'

import { getUser } 	from '../../app/api/auth';
import { searchFlextimeApi } 	from '../../app/api/flextime';
import styles from '../stylesheet/DrawerNavigator';

import Home         from '../../screens/home/Home';
import Meeting      from '../../screens/meeting/Meeting';
// import Offtime    from '../../screens/offtime/Offtime';
import Offtime      from '../../screens/offtime/OfftimeStackNavigator';
import AddFlextime  from '../../screens/flextime/AddFlextime';
import Flextime     from '../../screens/flextime/Flextime';
import Test         from '../../screens/test/Test';
import Login        from '../../screens/login/Login';
import { PATH_UPLOAD } from '../constants';
// const CustomDrawerContentComponent = (props) => (
//   <Container>
//     <Header style={styles.drawerHeader}>
//       <Body style={styles.bodyContainer}>
//           <Image
//             style={styles.drawerImage}
//             source={require('../../images/no_avatar.jpg')} />
//           <Text style={styles.title}>ANS-ASIA</Text>
//       </Body>
//     </Header>
//     <Content>
//       <DrawerItems {...props} />
//     </Content>
//     <TouchableOpacity onPress={() => { this.logout() }}>
//       <View style={styles.item}>
//         <Text style={styles.label}>Logout</Text>
//       </View>
//     </TouchableOpacity>
//   </Container>
// );

class CustomDrawerContentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      token    :  '',
			userInfo :  {}
		};
  }
  async componentWillMount() {
    await AsyncStorage.getItem('token').then((token) => {
      if (token) {
        this.setState({ token : token })
      } else {
        console.log('No user yet Login');
      }
    })
    let data = {token : this.state.token};
    let response    =   await getUser(data);
    this.setState({ userInfo : response.data.user });
  }
  logout() {
    AsyncStorage.clear();
    this.props.navigation.navigate('Login')
  }
  render() {
    const userInfo = this.state.userInfo
    const avatar = userInfo.avatar ? {uri: PATH_UPLOAD+userInfo.user_id+'/'+userInfo.avatar} : require('../../images/no_avatar.jpg');
    return (
      <Container>
        <Header style={styles.drawerHeader}>
          <Body style={styles.bodyContainer}>
              <Image
                style={styles.drawerImage}
                source={avatar} />
              <Text style={styles.title}>{userInfo.full_name}</Text>
          </Body>
        </Header>
        <Content>
          <DrawerItems {...this.props} />
        </Content>
        <TouchableOpacity onPress={() => { this.logout() }}>
          <View style={styles.item}>
            <Icon name="md-log-out" style={styles.icon} size={20} />
            <Text style={styles.label}>Logout</Text>
          </View>
        </TouchableOpacity>
      </Container>
    )
  }
}

export default MyApp = createDrawerNavigator({
  // For each screen that you can navigate to, create a new entry like this:
    Home: {
      screen: Home,
    },
    Meeting: {
      screen: Meeting
    },
    Offtime: {
      screen: Offtime,
      navigationOptions: {
        title: "Offtime",
        drawerLabel: 'Offtime',
        drawerIcon: ({ tintColor }) => (
          <Icon name="md-alarm"/>
        ),
      }
    },
    Flextime: {
      screen: Flextime
    },
    AddFlextime: {
      screen: AddFlextime
    },
    Test: {
      screen: Test
    }
  },{
      mode: 'card',
      initialRouteName: 'Home',
      drawerPosition: 'left',
      contentComponent: CustomDrawerContentComponent,
      drawerOpenRoute: 'DrawerOpen',
      drawerCloseRoute: 'DrawerClose',
      drawerToggleRoute: 'DrawerToggle',
  });
