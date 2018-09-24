import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity,
    AsyncStorage,
    ImageBackground
}   from 'react-native';
import {
    Container, Content, Icon,
    Header, Body, Card, CardItem,
    Left, Thumbnail
}   from 'native-base'
import {
    createDrawerNavigator, StackNavigator,
    createStackNavigator, DrawerItems, SafeAreaView
}   from 'react-navigation'
import { connect }          from 'react-redux';
import { getUser }          from '../../app/api/auth';
//import component
import Home                 from '../../screens/home/Home';
import Meeting              from '../../screens/meeting/Meeting';
import Offtime              from '../../screens/offtime/OfftimeStackNavigation';
import Test                 from '../../screens/test/Test';
import Login                from '../../screens/login/Login';
import { PATH_UPLOAD }      from '../constants';
//import style
import styles               from '../stylesheet/DrawerNavigator';

class CustomDrawerContentComponent extends Component {
    constructor(props) {
        super(props);
    }
    logout = async() => {
        await AsyncStorage.clear();
        await this.props.navigation.navigate('Login');
        await this.props.navigation.closeDrawer();
    }
    render() {
        const userInfo = this.props.userInfo
        const avatar = userInfo.avatar ? { uri: PATH_UPLOAD + userInfo.user_id + '/' + userInfo.avatar } : require('../../images/no_avatar.jpg');
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

                <Content style={{ backgroundColor: '#373E48' }}>
                    <DrawerItems
                        {...this.props}
                        itemStyle={styles.itemStyle}
                        // iconContainerStyle={styles.iconContainerStyle}
                        labelStyle={styles.labelStyle}
                        activeBackgroundColor={'#464D57'}
                />
                </Content>

                <TouchableOpacity onPress={this.logout} style={{ backgroundColor: '#373E48' }}>
                    <View style={styles.itemLogout}>
                        <View style={{paddingLeft:18}}>
                            <Icon name="md-log-out" style={styles.icon} />
                        </View>
                        <Text style={styles.labelStyle}>Logout</Text>
                    </View>
                </TouchableOpacity>
            </Container>
        )
    }
}
/*============================================================================*/
const mapStateToProps = (state) => {
	return {
		userInfo		:	state.auth.userInfo,
	};
}
const mapDispatchToProps = (dispatch) => {
	return {
	}
}
const CustomDrawer = connect(mapStateToProps, mapDispatchToProps)(CustomDrawerContentComponent);
/*============================================================================*/
const RouteConfigs = {
    // For each screen that you can navigate to, create a new entry like this:
    Offtime: {
        screen: Offtime,
        navigationOptions: {
            title: "Offtime",
            drawerLabel: 'Offtime',
            drawerIcon: ({ tintColor }) => (
                <Icon name="md-alarm" style={styles.icon} />
            ),
        }
    },
}
const DrawerNavigatorConfig = {
    mode: 'card',
    initialRouteName: 'Offtime',
    drawerPosition: 'left',
    contentComponent: CustomDrawer,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
}

export default MyApp = createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);
