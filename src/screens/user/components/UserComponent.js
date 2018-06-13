/**
*| Component      : User
*| Author       	: ANS806 - trieunb@ans-asia.com
*| Created date 	: 2018-06-11
*| Description   	:
*/
/*============================================================================*/
//import library
import React, { Component } from 'react';
import {
    Container, Content,
    Text, Icon,
    Card, CardItem, Thumbnail, Body, Left, Right, Button, List, ListItem
} from 'native-base';
import { Image } from 'react-native';
import { connect } from 'react-redux';

import { logout }  from '../../auth/redux/actions/action'
/*============================================================================*/
//export class User component
class UserComponent extends Component {
  render() {
    // alert(this.props.isLoggedIn);
    return(
      <List>
        <ListItem>
            <Thumbnail
              source={this.props.avatar}
            />
            <Body>
              <Text>{this.props.name}</Text>
              <Text note>{this.props.date}</Text>
            </Body>
        </ListItem>
      </List>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);
