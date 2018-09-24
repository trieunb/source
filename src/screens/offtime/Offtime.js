/**
*| Component      	:	Offtime
*| Author       	:	ANS806 - trieunb@ans-asia.com
*| Modify       	:	ANS817 - havv@ans-asia.com
*| Created date 	:	2018-06-11
*| Update date 		:	2018-06-26
*| Description   	:	Offtime Search
*/
/*============================================================================*/
//import library
import React, { Component }		from "react";
import {
	StyleSheet, 
	View, 
	Text, 
	Alert, 
	FlatList, 
	Dimensions, 
	TouchableHighlight, 
	AsyncStorage, 
	DeviceEventEmitter
}	from "react-native";
import {
	Container, 
	Content, 
	Form, 
	Icon, 
	Button, 
	Item, 
	Input
}	from 'native-base'
import { connect } 				from 'react-redux';
import { SearchBar }			from 'react-native-elements'
import Spinner 					from 'react-native-loading-spinner-overlay';
import Moment 					from 'moment';
import SectionedMultiSelect 	from 'react-native-sectioned-multi-select';
import ActionButton 			from 'react-native-action-button';
// import Icon 					from 'react-native-vector-icons/Ionicons';
//import redux action
import { offtimeSearch } 		from '../../app/actions/offtimeAction';
import { searchOfftimeApi } 	from '../../app/api/offtime';
//import component
import HeaderComponent 			from '../../app/components/HeaderComponent';
import FlatListItem 			from './components/FlatListItem';
import { ItemDateTimeFromTo } 	from '../../app/components/ItemDateTimeFromTo';
import _                        from "lodash";
// import validate
import { 
    validatejs, 
    validateDateFromTo
}   from '../../app/components/Validate';
// import styles
import { 
	COLOR_MAIN, 
	styleCommon, 
	itemInput, 
	itemSelect, 
	form 
}	from '../../app/stylesheet/Common';
// import set style DateTimeFromTo
import { setDateHorizontal } 	from '../../app/components/Common';

const DEVICE_WIDTH	=	Dimensions.get('window').width;
const DEVICE_HEIGHT	=	Dimensions.get('window').height;

const colorsSelect =  {
	chipColor: '#0066ff',
	selectToggleTextColor: '#767676',
}
const offType		=	[
	{ key : 1 , type_id : 0, type_name : 'Chose Off Type' },
	{ key : 2 , type_id : 1, type_name : 'Flextime' },
	{ key : 3 , type_id : 3, type_name : 'Day Off' }
]
const approvalList		=	[
	{ key : 0 , approval_id : -1, approval_name : 'Chose Approval' },
	{ key : 1 , approval_id : 0, approval_name : 'Unapproved' },
	{ key : 2 , approval_id : 1, approval_name : 'Approved' },
	{ key : 3 , approval_id : 2, approval_name : 'Rejected' }
]
//component flex time search
class Flextime extends Component {
	static navigationOptions = ({ navigation }) => ({
		title		: "Offtime",
		drawerLabel	: 'Offtime',
		drawerIcon	: ({ tintColor }) => (
			<Icon name="timer" />
		),
		headerTitleStyle: {
			textAlign	: "center",
			flex		: 1
		},
		header: null,
	});
	constructor(props) {
		super(props);
		this.state = {
			isLoading		:	false,
			listOfftime		:	[],
			user_name		:	'',
			isSearch		:	true,
			isResult		:	true,
			dateFrom		:	new Date(),
			dateTo			:	new Date(),
			offType			:	[],
			requesterId		:	[],
			approverId		:	[],
			approvalId		:	[],
			listUser 	 	:	[],
			dateHorizontal 	:	'row',
			isValidateDateTime: false
		};
		// this.searchOfftime	=	this.searchOfftime.bind(this);
	};
	componentWillMount() {
		this.setState({
			dateHorizontal: setDateHorizontal(DEVICE_WIDTH),
			isSearch 	:	this.props.isSearch,
			offType  	:	[offType[1].type_id],
			approvalId 	:	[approvalList[0].approval_id]
		});
		// add event
		// Dimensions.addEventListener('change', () => {
		// 	let deviceWidth = Dimensions.get('window').width;
		// 	this.setState({
		// 		dateHorizontal: setDateHorizontal(deviceWidth)
		// 	});
		// });
	}
	componentWillReceiveProps = (nextProps) => {
		//set state
		this.setState({
			userList	:	nextProps.userList,
			isSearch	:	nextProps.isSearch
		})
		//research offtime
		DeviceEventEmitter.addListener('search offtime', (e) => this.searchOfftime());
	}
	searchOfftime = async () => {
		await this.setState({ isLoading: true });
		let response = await searchOfftimeApi(this.getDataSearch());
		if (response.data.result.length > 0) {
			await this.setState({
				listOfftime		:	response.data.result,
				isSearch 		: 	response.data.result.length > 0 ? false : true,
			});
		} else {
			Alert.alert('No Result!');
		}
		await this.setState({ isLoading: false });
	}
	isSearchForm = () => {
		this.setState({ isSearch: !this.state.isSearch });
	}
	getDataSearch = () => {
		let data	=	{
			requester_id	:	this.state.requesterId,
			approver_id		:	this.state.approverId,
			approval_id		:	(typeof(this.state.approvalId[0]) != 'undefined') ? this.state.approvalId[0] : '-1',
			off_type		:	this.state.offType[0] ? this.state.offType[0] : '0',
			flextime_type	:	'0',
            dateFrom		:	this.state.dateFrom ? Moment(this.state.dateFrom).format('YYYY/MM/DD') : this.state.dateFrom,
			dateTo			:	this.state.dateTo ? Moment(this.state.dateTo).format('YYYY/MM/DD') : this.state.dateTo,
			markup_type		:	'0',
			branch_id		:	this.props.branch.branch_id
		};
		return data;
	}
	// render text for item Requester
    _renderTextRequester = () => {
        let text = '';
		text = 'Requester';
        return text;
	};
	// render text for item Off type
    _renderTextOffType = () => {
        let text = '';
        if (this.state.offType[0]) {
            text = this.state.offType[0].type_name;
        } else {
            text = 'Chose Off Type';
        }
        return text;
	};
	// render text for item Approver
    _renderTextApprover = () => {
        let text = '';
		text = 'Chose Approver';
        return text;
	};
	// render text for item Approver
    _renderTextApproval = () => {
        let text = '';
        if (this.state.approvalId[0]) {
            text = this.state.approvalId[0].approval_name;
        } else {
            text = 'Chose Approval';
        }
        return text;
    };
	// render text for item Date From, Date To
    _renderTextDayOff = (time, isFrom) => {
        let text = '';
        if (time == '') {
            if (isFrom) {
                text = Moment(new Date()).format('YYYY/MM/DD');
            } else {
                text = Moment(new Date()).format('YYYY/MM/DD');
            }
        } else {
            text = Moment(time).format('YYYY/MM/DD');
        }
        return text;
	};
	checkDateFromTo = (from, to, mode) => {
        return validateDateFromTo(from, to, mode);
    }
	render() {
		const { listOfftime, isLoading, isSearch, isResult, listUser } = this.state;
		return (
			<Container>
				<HeaderComponent title="Offtime"
					drawerOpen={() => this.props.navigation.toggleDrawer()}
					rightHeader={
						<TouchableHighlight
							onPress={this.isSearchForm}
						>
							<Icon name="search" style={{color: COLOR_MAIN}}/>
						</TouchableHighlight>
					}
				/>
				<Content>
					{isSearch ?
					<Form>
						<View style={{ backgroundColor: '#FFFFFF' }}>
							<View style={[styleCommon.vItem, styleCommon.border]}>
								<View style={styleCommon.vIcon}>
									<Icon active name='person' style={styleCommon.iconFont}/>
								</View>
								<View style={itemSelect.vSelect}>
									<SectionedMultiSelect
										items={this.props.userList}
										uniqueKey='user_id'
										displayKey='user_name'
										selectText={this._renderTextRequester()}
										confirmText='Close'
										searchPlaceholderText='Search'
										// showCancelButton={true}
										showChips={false}
										colors={colorsSelect}
										styles={{ selectToggle: itemSelect.selectToggle }}
										onSelectedItemsChange={(selectedItems) => {
											this.setState({ requesterId: selectedItems });
										}}
										selectedItems={this.state.requesterId}
									/>
								</View>
							</View>
							<View style={[styleCommon.vItem, styleCommon.border]}>
								<View style={styleCommon.vIcon}>
									<Icon active name='people' style={styleCommon.iconFont}/>
								</View>
								<View style={itemSelect.vSelect}>
									<SectionedMultiSelect
										items={this.props.userList}
										uniqueKey='user_id'
										displayKey='user_name'
										selectText={this._renderTextApprover()}
										confirmText='Close'
										searchPlaceholderText='Search'
										// showCancelButton={true}
										showChips={false}
										colors={colorsSelect}
										styles={{ selectToggle: itemSelect.selectToggle }}
										onSelectedItemsChange={(selectedItems) => {
											this.setState({ approverId: selectedItems });
										}}
										selectedItems={this.state.approverId}
									/>
								</View>
							</View>
							<View style={[styleCommon.vItem, styleCommon.border]}>
								<View style={styleCommon.vIcon}>
									<Icon active name='keypad' style={styleCommon.iconFont}/>
								</View>
								<View style={itemSelect.vSelect}>
									<SectionedMultiSelect
										items={offType}
										single={true}
										uniqueKey='type_id'
										displayKey='type_name'
										selectText={this._renderTextOffType()}
										hideSearch={true}
										// showChips={false}
										// showRemoveAll={true}
										// modalSupportedOrientations={['portrait']}
										// showConfirmButton={false}
										confirmText='Close'
										colors={colorsSelect}
										styles={{ selectToggle: itemSelect.selectToggle }}
										onSelectedItemsChange={(selectedItems) => {
											this.setState({ offType: selectedItems });
										}}
										selectedItems={this.state.offType}
									/>
								</View>
							</View>
							<View style={[styleCommon.vItem, styleCommon.border]}>
								<View style={styleCommon.vIcon}>
									<Icon active name='keypad' style={styleCommon.iconFont}/>
								</View>
								<View style={itemSelect.vSelect}>
									<SectionedMultiSelect
										items={approvalList}
										single={true}
										uniqueKey='approval_id'
										displayKey='approval_name'
										selectText={this._renderTextApproval()}
										hideSearch={true}
										confirmText='Close'
										// showConfirmButton={false}
										colors={colorsSelect}
										styles={{ selectToggle: itemSelect.selectToggle }}
										onSelectedItemsChange={(selectedItems) => {
											this.setState({ approvalId: selectedItems });
										}}
										selectedItems={this.state.approvalId}
									/>
								</View>
							</View>
							<ItemDateTimeFromTo
								textDateTimeFrom={this._renderTextDayOff(this.state.dateFrom, true)}
								textDateTimeTo={this._renderTextDayOff(this.state.dateTo, false)}
								mode='date'
								// datePickerModeAndroid='calendar'
								onDateTimeFromSelected={(time) => this.setState({ dateFrom: time, isValidateDateTime  : true })}
								onDateTimeToSelected={(time) => this.setState({ dateTo: time, isValidateDateTime  : true })}
								dateFrom={this.state.dateFrom == '' ? new Date() : this.state.dateFrom}
								dateTo={this.state.dateTo == '' ? new Date() : this.state.dateTo}
								dateHorizontal={this.state.dateHorizontal}
								validate={this.state.isValidateDateTime}
								valDateFromTo={this.checkDateFromTo}
							/>
							<View style={styleCommon.vItemButton}>
								<Button full primary style={[styleCommon.itemButton, styleCommon.itemButtonColorMain]} onPress={this.searchOfftime}>
									<Text style={styleCommon.itemButtonMain}>SEARCH</Text>
								</Button>
							</View>
						</View>
					</Form>
					: 
					<FlatList
						ref="listRef"
						data={listOfftime}
						keyExtractor={(item, index) => item.target_id}
						renderItem={({ item, index }) => {
							return (
								<FlatListItem
									item={item} index={index}
									navigation={this.props.navigation}
								>
								</FlatListItem>
							);
						}}>
					</FlatList>
					}
				</Content>
				<ActionButton buttonColor="rgba(231,76,60,1)">
					<ActionButton.Item buttonColor='#9b59b6' title="Add FlexTime" onPress={() => {this.props.navigation.navigate('AddFlextime')}}>
						<Icon name="md-add" style={stylesFab.actionButtonIcon} />
					</ActionButton.Item>
					<ActionButton.Item buttonColor='#1abc9c' title="Add DayOff" onPress={() => {this.props.navigation.navigate('AddDayOff')}}>
						<Icon name="md-add" style={stylesFab.actionButtonIcon} />
					</ActionButton.Item>
				</ActionButton>
				<View>
					<Spinner visible={isLoading} textContent={"Loading..."} textStyle={{ color: '#FFF' }} />
				</View>
			</Container>
		)
	}
}
const stylesFab = StyleSheet.create({
	actionButtonIcon: {
	  fontSize: 20,
	  height: 22,
	  color: 'white',
	},
  });
/*============================================================================*/
const mapStateToProps = (state) => {
	return {
		stateOfftime	:	state.offtime.response,
		loading			:	state.offtime.loading,
		status			:	state.offtime.status,
		userInfo		:	state.auth.userInfo,
		userList		:	state.auth.listUser,
		token			:	state.auth.token,
		branch			:	state.auth.branch,
		isSearch		:	state.auth.isFormSearch
	};
}
const mapDispatchToProps = (dispatch) => {
	return {
		offtimeSearch: (data) => { dispatch(offtimeSearch(data)) },
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Flextime);
/*============================================================================*/