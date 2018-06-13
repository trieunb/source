/**
*| Component      : Offtime
*| Author       	: ANS806 - trieunb@ans-asia.com
*| Created date 	: 2018-06-11
*| Description   	:
*/
/*============================================================================*/
//import library
import React, { Component } from 'react';
import { Container, Text, Content, Icon, Header, Left, Button, Body, Title, Right } from 'native-base';
/*============================================================================*/
//export class Main
export default class OfftimeTab extends Component{
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="md-alarm" style={{color: tintColor}} />
    },
    title: 'Offtime',
    header: () => null
  };
  render() {
    return(
      <Container>
        <Header>
          <Right>
            <Button transparent>
              <Icon name="log-out" />
            </Button>
          </Right>
        </Header>
        <Content>
          <Text>This Is Offtime Screen</Text>
        </Content>
      </Container>
    );
  }
}
