/**
*| Component        :   Flextime list
*| Author       	:   ANS806 - trieunb@ans-asia.com
*| Created date 	:   2018-06-25
*| Description   	:   Flextime flat list
*/
/*============================================================================*/
//import library
import React, { Component } from "react";
import {
    View,
    Text,
    Image,
    FlatList,
    TouchableOpacity,
    Alert, 
    DeviceEventEmitter
} from "react-native";
import {
    Icon,
    Button, 
    Container, 
    Header,
    Content, 
    Left, 
    Item, 
    DatePicker, 
    Form,
    Picker
}   from 'native-base';
import { connect }              from 'react-redux';
import Swipeout                 from 'react-native-swipeout';
import { deleteFlextimeApi }    from '../../../app/api/offtime';
import { PATH_UPLOAD }          from '../../../app/constants';
/*============================================================================*/
//import component
import styles                   from '../stylesheet/FlatListItem';
/*============================================================================*/
const OFFTIME_TYPE = {
    Flextime: 1,
    DayOff: 3,
};
//class flextime list
class FlatListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeRowKey: null,
            sectionID: null,
            rowID: null,
        }
    }
    //show offtime detail
    showDetail = () => {
        var route = '';
        var params = {};

        if (this.props.item.off_type == OFFTIME_TYPE.Flextime) {
            route = 'EditFlextime';
            params = {
                flextime_id: this.props.item.target_id,
                flextime_date: this.props.item.date_to,
                requester_id: this.props.item.employee_id,
            };
        } else if (this.props.item.off_type == OFFTIME_TYPE.DayOff) {
            route = 'EditDayOff';
            params = {};
        }
        this.props.navigation.navigate(route, params);
    }
    //delete offtime detail
	deleteDetail = async() => {
		if (this.props.item.off_type == OFFTIME_TYPE.Flextime) {
			let data = {
                id      :   this.props.item.target_id,
                user    :   this.props.item.employee_id,
                date    :   this.props.item.date_to,
                branch  :   this.props.branch.branch_id,
			}
			let response    =   await deleteFlextimeApi(data);
			if (response.data.status) {
				DeviceEventEmitter.emit('search offtime',  {});
			} else {
				Alert.alert(
				    'Error',
				    'Delete Failed!')
			    }
		} else if (this.props.item.off_type == OFFTIME_TYPE.DayOff) {
			Alert.alert('Warning','Pending!');
		}
    }
    render() {
        const listOfftime = this.props.item;
        const avatar = listOfftime.avatar ? { uri: PATH_UPLOAD + listOfftime.employee_id + '/' + listOfftime.avatar } : require('../../../images/no_avatar.jpg');
        let icon;
        let approve;
        if (this.props.item.approval_status) {
            icon = <Icon name="md-checkmark" style={{ fontSize: 20, color: '#3498db', margin: 3 }} />
        } else {
            icon = <Icon name="md-close" style={{ fontSize: 20, color: '#e74c3c', margin: 3 }} />
        }
        let swipeSetting = {
            autoClose: true,
            onOpen: (sectionID, rowId, direction) => {
                this.setState({ activeRowKey: this.props.item.key })
            },
            onClose: (sectionID, rowId, direction) => {
                this.setState({ activeRowKey: null })
            },
            right: [
                {
                    onPress: this.showDetail,
                    text: 'Detail',
                    type: 'primary',
                },
            ],
            rowId: this.props.index,
            sectionID: 1
        }
        if(this.props.userInfo.user_auth != 0 || this.props.item.employee_id == this.props.userInfo.user_id) {
			swipeSetting = {
			    autoClose: true,
			    onOpen: (sectionID, rowId, direction) => {
				    this.setState({ activeRowKey: this.props.item.key })
			    },
			    onClose: (sectionID, rowId, direction) => {
				    this.setState({ activeRowKey: null })
			    },
			   right: [
				   {
					   onPress: this.showDetail,
					   text: 'Detail',
					   type: 'primary',
				   },
				   {
                    //    onPress: this.deleteDetail,
                        onPress: () => Alert.alert(
                                'Confirm',
                                'Are you sure to delete this Flextime?',
                                [
                                    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                                    {text: 'OK', onPress: () => this.deleteDetail()},
                                ],
                                { cancelable: false }
                            ),
					    text: 'Delete',
					    type: 'delete'
				   }
			   ],
			   rowId: this.props.index,
			   sectionID: 1
		   }
		}
        return (
            <Swipeout {...swipeSetting}>
                <View style={styles.containerFlatList}>
                    <View style={styles.containerItem}>
                        <Image
                            source={avatar}
                            style={styles.avatar}
                        >
                        </Image>
                        <View style={styles.containerContent}>
                            <Text style={styles.flatListItem}>
                                <Text
                                    style={styles.textUser}
                                >
                                    {listOfftime.employee_id}: {listOfftime.employee_full_name} - {listOfftime.flextime_type}
                                </Text>
                            </Text>
                            <Text style={styles.flatListItem}>
                                {listOfftime.date_to}{listOfftime.flextime_hours == '' ? '' : ' - ' + listOfftime.flextime_hours}
                            </Text>
                            <Text style={styles.flatListItem}>
                                {listOfftime.reason.length > 50 ? listOfftime.reason.substr(0, 40) + '...' : listOfftime.reason}
                            </Text>
                            <View style={styles.itemApprove}>
                                {icon}
                                <Text style={styles.flatListItem}>
                                    {listOfftime.approval_status ? 'Approved' : 'Unapprove'}
                                </Text>
                                {/* {approve} */}
                            </View>
                        </View>
                    </View>
                    <View
                        style={styles.borderLine}>
                    </View>
                </View>
            </Swipeout>
        );
    }
}
/*============================================================================*/
const mapStateToProps = (state) => {
	return {
		userInfo		:	state.auth.userInfo,
		branch			:	state.auth.branch
	};
}
export default connect(mapStateToProps, null)(FlatListItem);
/*============================================================================*/
