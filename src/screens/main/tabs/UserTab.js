/**
*| Component      : User
*| Author       	: ANS806 - trieunb@ans-asia.com
*| Created date 	: 2018-06-11
*| Description   	:
*/
/*============================================================================*/
//import library
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Text, Content, Icon, Header, Left, Button, Body, Title, Right } from 'native-base';
import {Actions} from 'react-native-router-flux';

import { connect } from 'react-redux';

import { logout }  from '../../auth/redux/actions/action'
/*============================================================================*/
//import Component
import UserComponent from './../../user/components/UserComponent';
/*============================================================================*/
//export class Main
class UserTab extends Component{
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="md-home" style={{color: tintColor}} />
    },
    title: 'User'
  };
  userLogout() {
    // alert(this.state);
    // if (this.state.username === '' || this.state.password === '') {
    //   Alert.alert(
    //     'Error!',
    //     'user name or password invalid!',
    //   )
    // } else {
    //   this.props.doLogin(this.state.username, this.state.password)
    //   Actions.main();
    // }
    this.props.doLogout()
    Actions.login();
	}
  render() {
    let userList = [
      {
        key    : 1,
        avatar : require('../../../images/no_avatar.jpg'),
        name   : 'Can Wan Ha',
        date   : '23 August , 2018',
      },
      {
        key    : 2,
        avatar : require('../../../images/no_avatar.jpg'),
        name   : 'Le Kuaq Vu',
        date   : '23 August , 2018',
      },
      {
        key    : 3,
        avatar : require('../../../images/no_avatar.jpg'),
        name   : 'Quyen Van Kuy',
        date   : '23 August , 2018',
      },
      {
        key    : 4,
        avatar : require('../../../images/no_avatar.jpg'),
        name   : 'Vo Viet Ha',
        date   : '23 August , 2018',
      },
      {
        key    : 5,
        avatar : require('../../../images/no_avatar.jpg'),
        name   : 'Quyen Xuan Dao',
        date   : '23 August , 2018',
      },
      {
        key    : 6,
        avatar : require('../../../images/no_avatar.jpg'),
        name   : 'Quyen Tan Tuan',
        date   : '23 August , 2018',
      },
      {
        key    : 7,
        avatar : require('../../../images/no_avatar.jpg'),
        name   : 'Vo Din Ky',
        date   : '23 August , 2018',
      },
      {
        key    : 8,
        avatar : require('../../../images/no_avatar.jpg'),
        name   : 'Nguyen Ba Trieu',
        date   : '23 August , 2018',
      },
      {
        key    : 9,
        avatar : require('../../../images/no_avatar.jpg'),
        name   : 'Quyen Van Xa',
        date   : '23 August , 2018',
      },
    ]
    return(
      <Container>
        <Header>
          <Right>
            <Button transparent onPress={() => this.userLogout()}>
              <Icon name="log-out" />
            </Button>
          </Right>
        </Header>
        <Content>
          {
              userList.map(eachUsers => {
                return <UserComponent
                  key={eachUsers.key}
                  avatar={eachUsers.avatar}
                  name={eachUsers.name}
                  date={eachUsers.date}
                />
              })
            }
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        doLogout: () => { dispatch(logout()); },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserTab);
