/**
*| Component      : Offtime
*| Author       	: ANS806 - trieunb@ans-asia.com
*| Created date 	: 2018-06-11
*| Description   	:
*/
/*============================================================================*/
//import library
import React, { Component } from 'react';
import { Container, Text, Content, Icon } from 'native-base';
/*============================================================================*/
//export class Main
export default class OfftimeTab extends Component{
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="md-alarm" style={{color: tintColor}} />
    },
    title: 'Offtime'
  };
  render() {
    return(
      <Container style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Content>
          <Text>This Is Offtime Screen</Text>
        </Content>
      </Container>
    );
  }
}
