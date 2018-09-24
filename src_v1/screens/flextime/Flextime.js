/**
*| Component      : App
*| Author       	: ANS806 - trieunb@ans-asia.com
*| Author       	: ANS817 - havv@ans-asia.com
*| Created date 	: 2018-06-11
*| Created date 	: 2018-06-26
*| Description   	: Flextime (add/update)
*/
/*============================================================================*/
//import library
import React, { Component } from "react";
import {
	StyleSheet, View, Text, Button, Alert, FlatList
} from "react-native";
import {
	Container, Content, Form, Icon
} from 'native-base'
import { SearchBar } 	from 'react-native-elements'
//import component
import HeaderComponent 		from '../../app/components/HeaderComponent';
import testData         	from '../../data/test';
import FlatListItem     	from './components/FlatListItem';
import { ItemDateFromTo } 	from '../../app/components/ItemDateFromToComponent';
//import api
import { searchFlextimeApi } 	from '../../app/api/flextime';

// const width   = Dimensions.get('window').width;
// const height  = Dimensions.get('window').height;

class Flextime extends Component {
	constructor(props) {
		super(props);
		this.state = {
			listFlexTime	:	[],
			user_name		:	''	
		};
	};

	static navigationOptions = ({ navigation }) => ({
		title: "Flextime",
		// headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
		drawerLabel: 'Flextime',
		drawerIcon: ({ tintColor }) => (
			<Icon name="timer" />
		),
		headerTitleStyle: {
			textAlign: "center",
			flex: 1
		},
	});
	async componentWillMount() {
		let data = {
            text        :   '',
		}
		let response    =   await searchFlextimeApi(data);
		await this.setState({ listFlexTime : response.data.result })
	}
	searchFlextime = (text) => {
		console.log(text);
	}
	render() {
		// console.log(this.state.listFlexTime);
		const listFlexTime	=	this.state.listFlexTime;
		return (
			<Container>
				<HeaderComponent title="Flextime" drawerOpen={() => this.props.navigation.toggleDrawer()} />
				<View style={{ flex: 1 }}>
					<SearchBar
						round
						lightTheme
						onChangeText = {(text)	=>	this.searchFlextime(text)}
						icon={{ type: 'font-awesome', name: 'search' }}
						placeholder='Type Here...' />
					<Content>
						<FlatList
						data={listFlexTime}
						renderItem={({item, index}) => {
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

export default Flextime;
