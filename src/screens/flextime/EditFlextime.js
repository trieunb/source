/**
*| Component        :   Edit Flextime
*| Author       	:   ANS817 - havv@ans-asia.com
*| Modify       	:   ANS806 - trieunb@ans-asia.com
*| Created date 	:   2018-08-15
*| Update date 		:   2018-08-29
*| Description   	:   Edit Flextime
*/
/*============================================================================*/
//import library
import React, { Component } from "react";
import {
    StyleSheet, 
    View, 
    Text, 
    Alert, 
    AsyncStorage, 
    DeviceEventEmitter, 
    Dimensions
}   from "react-native";
import {
    Container, 
    Content, 
    Form, 
    Icon,
    Item, 
    Picker,
    Input, 
    DatePicker,
    Textarea, 
    Button
}   from 'native-base'
import { connect }              from 'react-redux';
import SectionedMultiSelect     from 'react-native-sectioned-multi-select';
import Moment                   from 'moment';
import Spinner                  from 'react-native-loading-spinner-overlay';
//import api
import { getInfoApi }           from '../../app/api/common';
import { listUserApi }          from '../../app/api/common';
import { listLibraryCodeApi }   from '../../app/api/common';
import { getFlextimeApi }       from '../../app/api/offtime';
import { updateFlextimeApi }    from '../../app/api/offtime';
//import component
import { ItemDateTime }         from '../../app/components/ItemDateTimeComponent';
import { ItemDateTimeFromTo }   from '../../app/components/ItemDateTimeFromTo';
import { setDateHorizontal }    from '../../app/components/Common';
import { 
    validatejs, 
    validateDateFromTo 
}   from '../../app/components/Validate';
//import styles
import { 
    styleCommon, 
    colorsSelect, 
    itemSelect, 
    DEVICE_WIDTH,
    styleMessageError,
    COLOR_MAIN
}  from '../../app/stylesheet/Common';
//Class Edit Flex Time
class EditFlextime extends Component {
    static navigationOptions = ({ navigation }) => ({
        headerStyle: {
            backgroundColor: 'white',
            borderBottomWidth: 1,
            borderBottomColor: '#D4D4D4',
            elevation: 0,
        },
        headerLeft: <Icon name={'arrow-back'} onPress={() => { navigation.goBack() }} style={{ color: COLOR_MAIN }} />,
        headerLeftContainerStyle: {
            paddingLeft: 10,
        },
        title: "Edit Flextime",
        headerTitleStyle: {
            color: COLOR_MAIN,
            fontSize: 19,
            fontWeight: 'normal',
            fontFamily: 'Roboto_medium',
            alignItems: 'center',
            justifyContent: 'center',
        },             
        headerTitleContainerStyle: {
            alignItems: 'center',
            justifyContent: 'center',
        },
        headerRight: <Icon/>,
    });
    // constructor
    constructor(props) {
        super(props);
        this.state = {
            isLoading		    : false,
            listUser            : [],
            listType            : [],
            flextime_id         : 0,
            requester_id        : [],
            flextime_date       : '',
            flextime_type       : [],
            approver_id         : [],
            flextime_time_from  : '',
            flextime_time_to    : '',
            reason              : '',
            branch_id           : 1,
            userInfo            : {},
            flextime            : [],
            approvalstatus      : [],
            dateHorizontal      : 'row',
            branch              : {},
            // message error
            errorFlextimeType   : '',
            errorApprover       : '',
            errorDate           : '',
            errorTimeFromTo     : '',
            errorReason         : '',
            isValidateDateTime: false
        };
    };
    //init data for component
    componentWillMount() {
        this.getData();
        // add event
        // Dimensions.addEventListener('change', () => {
        //     let deviceWidth = Dimensions.get('window').width;
        //     this.setState({
        //         dateHorizontal: setDateHorizontal(deviceWidth)
        //     });
        // });
    }
    // render text for item Flextime Type
    renderTextFlexTimeType = () => {
        var text = '';
        if (this.state.flextime_type[0]) {
            text = this.state.flextime_type[0].name;
        } else {
            text = 'Flextime Type';
        }
        return text;
    };
    // render text for item Approver
    renderTextApprover = () => {
        var text = '';
        text = 'Approver';
        return text;
    };
    // render text for item Reason
    renderTextReason = () => {
        var text = '';
        // reason is not exist then display text
        text = 'Reason';
        return text;
    };
    // render text for item FlextimeTimeFrom, FlextimeTimeTo
    renderTextFlextimeTime = (time, isFrom) => {
        var text = '';
        if (time == '') {
            // time is not exist then display text
            if (isFrom) {
                //item from
                text = 'Time From';
            } else {
                //item to
                text = 'Time To';
            }
        } else {
            // time is exist then display flextime_date
            text = Moment(time).format('HH:mm');
        }
        return text;
    };
    // get data
    getData = async () => {
        await this.setState({
            isLoading       :   true,
            dateHorizontal  :   setDateHorizontal(DEVICE_WIDTH),
            userInfo        :   this.props.userInfo,
            branch          :   this.props.branch,
            listType        :   this.props.flexTimeType,
            listUser        :   this.props.userList,
            flextime_id     :   this.props.navigation.getParam('flextime_id'),
            flextime_date   :   this.props.navigation.getParam('flextime_date'),
            requester_id    :   [this.props.navigation.getParam('requester_id')],
        });
        // refer flextime
        await this.referFlextime();
    }
    // refer flextime
    referFlextime = async () => {
        let data = {
            flextime_id     :   this.state.flextime_id,
            flextime_date   :   this.state.flextime_date,
            user_login      :   this.state.userInfo.user_id,
            branch_id       :   this.state.branch.branch_id,
        }
        let response = await getFlextimeApi(data);
        console.log(response);
        await this.setState({
            isLoading           :   false,
            flextime            :   response.data.flextime[0],
            approver_id         :   response.data.approveruser,
            approvalstatus      :   response.data.approvalstatus[0],
            flextime_type       :   [response.data.flextime[0].flextime_type],
            flextime_time_from  :   new Date(response.data.flextime[0].date + ' ' + response.data.flextime[0].flextime_from),
            flextime_time_to    :   new Date(response.data.flextime[0].date + ' ' + response.data.flextime[0].flextime_to),
            reason              :   response.data.flextime[0].reason,
        });
    }
    updateFlexTime = async() => {
		let data        =   await this.getDataRequest();
		let check       =   await this.checkData(data);
		if (check) {
			Alert.alert(
                'Confirm',
                'Do you want to update flextime',
                [
                    {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                    {text: 'OK', onPress: () => this.saveData(data)},
                ],
                { cancelable: false }
			)
		}
	}
	saveData = async(data) => {
        await this.setState({ isLoading : true });
		let response    =   await updateFlextimeApi(data);
		if (response.data.status) {
			Alert.alert(
                'Success',
                'Flextime have been saved successfully',
                [
                    // {text: 'OK', onPress: () => this.goBack()},
                    {text: 'OK'},
                ],
                { cancelable: false }
			)
		} else {
			if (response.data.result.Code == '113') {
				Alert.alert('Error','You can not register more than {0} flextime in a day'.replace("{0}", response.data.result.Id));
			} else if (response.data.result.Code == '112') {
				Alert.alert('Error','This Flextime has already existed');
			} else if (response.data.result.Code == '59') {
				Alert.alert('Error','Flextime must be smaller than or equal {0} hour(s)'.replace("{0}", response.data.result.Data));
			} else {
				Alert.alert('Error','Save Failed!');
			}
        }
        await this.setState({ isLoading : false });
	}
	// goBack(){
	// 	DeviceEventEmitter.emit('search offtime',  {});
	// 	this.props.navigation.navigate('Offtime')
	// }
	checkData(data) {
		//Trieunb - Update code - 2018/09/10
        let isValidate = true;
        this.setState({
            errorFlextimeType   : validatejs('required', data.flextime_type),
            errorApprover       : validatejs('required', data.approver_id),
            errorDate           : validatejs('required', data.flextime_date),
            errorReason         : validatejs('required', data.reason),
        });
        if (typeof this.state.errorFlextimeType !== 'undefined') {
            isValidate  =    false;
        }
        if (typeof this.state.errorApprover !== 'undefined') {
            isValidate  =    false;
        }
        if (typeof this.state.errorDate !== 'undefined') {
            isValidate  =    false;
        }
        if (!this.checkDateFromTo(this.state.flextime_time_from, this.state.flextime_time_to, 'time').status) {
            isValidate  =    false;
        }
        if (typeof this.state.errorReason !== 'undefined') {
            isValidate  =    false;
        }
        return isValidate;
    }
    checkDateFromTo = (from, to, mode) => {
        return validateDateFromTo(from, to, mode);
    }
	getDataRequest = () => {
		let data = {
			flextime_id         :   this.state.flextime_id,
			requester_id        :   this.state.requester_id[0],
			flextime_type       :   this.state.flextime_type[0],
			flextime_date       :   this.props.navigation.getParam('flextime_date'),
			flextime_time_from  :   !!this.state.flextime_time_from ? Moment(this.state.flextime_time_from).format('HHmm') : '',
			flextime_time_to    :   !!this.state.flextime_time_to ? Moment(this.state.flextime_time_to).format('HHmm') : '',
			repeat_div			:   '',
			repeat_interval		:   1,
			repeat_from			:   '',
			repeat_end			:   '',
			repeat_day			:   '',
			reason              :   this.state.reason,
			approver_id         :   this.state.approver_id,
			branch_id           :   this.state.branch.branch_id,
			user_id             :   this.state.userInfo.user_id,
		}
		return data;
	}
	// shouldComponentUpdate(nextProps, nextState) {
	// 	return (nextState.approver_id.length > 0);
	// }
    render() {
        //setState render
        const { listUser, listType, isLoading }    =   this.state;
        let timeFromTo = null;
        let buttonUpdate = null;
        if (this.state.flextime_time_from!='') {
            timeFromTo = <ItemDateTimeFromTo
                            textDateTimeFrom={this.renderTextFlextimeTime(this.state.flextime_time_from, true)}
                            textDateTimeTo={this.renderTextFlextimeTime(this.state.flextime_time_to, false)}
                            mode='time'
                            onDateTimeFromSelected={(time) => this.setState({ 
                                        flextime_time_from: time, 
                                        isValidateDateTime  : true })}
                            onDateTimeToSelected={(time) => this.setState({ 
                                        flextime_time_to: time, 
                                        isValidateDateTime  : true })}
                            dateFrom={this.state.flextime_time_from}
                            dateTo={this.state.flextime_time_to}
                            dateHorizontal={this.state.dateHorizontal}
                            validate={this.state.isValidateDateTime}
                            valDateFromTo={this.checkDateFromTo}
                         />
        }
        //button update
        if (this.state.userInfo.user_auth > 0 || this.state.requester_id == this.state.userInfo.user_id ) {
            buttonUpdate = <Button full primary style={[styleCommon.itemButton, styleCommon.itemButtonColorMain]} onPress={() => this.updateFlexTime()}>
							   <Text style={styleCommon.itemButtonMain}>UPDATE</Text>
						   </Button>
        }
        return (
            <Container>
                <Content>
                    <Form>
                        <View style={[styleCommon.vItem, styleCommon.border, styleCommon.disabled]}>
                            <View style={styleCommon.vIcon}>
                                <Icon active name='person' style={styleCommon.iconFont}/>
                            </View>
                            <Text>{this.state.flextime.employee_id + ' : ' + this.state.flextime.full_name}</Text>
                        </View>
                        <View style={[styleCommon.vItem, styleCommon.border, !!this.state.errorFlextimeType ? styleMessageError.errorBorder : '']}>
                            <View style={styleCommon.vIcon}>
                                <Icon active name='keypad' style={styleCommon.iconFont}/>
                            </View>
                            <View style={itemSelect.vSelect}>
                                <SectionedMultiSelect
                                    items={listType}
                                    single={true}
                                    hideSearch={true}
                                    uniqueKey='number'
                                    displayKey='name'
                                    selectText={this.renderTextFlexTimeType()}
                                    confirmText='Select'
                                    searchPlaceholderText='Search Flextime Type'
                                    showCancelButton={true}
                                    colors={colorsSelect}
                                    styles={{ selectToggle: itemSelect.selectToggle }}
                                    onSelectedItemsChange={(selectedItems) => {
                                        this.setState({ 
                                            flextime_type: selectedItems,
                                            errorFlextimeType: validatejs('required', selectedItems)
                                        });
                                    }}
                                    selectedItems={this.state.flextime_type}
                                    onConfirm={() => {
                                        this.setState({
                                            errorFlextimeType: validatejs('required', this.state.flextime_type)
                                        });
                                    }}
                                />
                            </View>
                        </View>
                        <View style={!!this.state.errorFlextimeType ? styleMessageError.viewError : styleMessageError.viewNone}>
                            <Text style={styleMessageError.errorColorText}>{this.state.errorFlextimeType}</Text>
                        </View>
                        <View style={[styleCommon.vItem, styleCommon.border]}>
                            <View style={styleCommon.vIcon}>
                                <Icon active name='people' style={styleCommon.iconFont}/>
                            </View>
                            <View style={itemSelect.vSelect}>
                                <SectionedMultiSelect
                                    items={listUser}
                                    uniqueKey='user_id'
                                    displayKey='user_display'
                                    selectText={this.renderTextApprover()}
                                    confirmText='Select'
                                    searchPlaceholderText='Search Approver'
                                    showCancelButton={true}
                                    showChips={false}
                                    colors={colorsSelect}
                                    styles={{ selectToggle: itemSelect.selectToggle }}

                                    onSelectedItemsChange={(selectedItems) => {
                                        this.setState({ approver_id: selectedItems });
                                    }}
                                    selectedItems={this.state.approver_id}
                                />
                            </View>
                        </View>
                        <View style={[styleCommon.vItem, styleCommon.border, styleCommon.disabled]}>
                            <View style={styleCommon.vIcon}>
                                <Icon active name='calendar' style={styleCommon.iconFont}/>
                            </View>
                            <Text>{this.props.navigation.getParam('flextime_date')}</Text>
                        </View>
                        {/* <ItemDateTime
                            textDateTime={this.state.flextime_date}
                            mode='date'
                            onDateTimeSelected={(date) => {
                                this.setState({
                                    flextime_date: date,
                                    // errorDate: validatejs('checkDateCompareCurrentDate', Moment(date).format('YYYY-MM-DD'))
                                });
                            }}
                            dateTime={this.state.flextime_date}
                            errorDate={this.state.errorDate}
                        /> */}
                        {timeFromTo}
                        <View style={styleCommon.vItem}>
                            <View style={styleCommon.vTextArea}>
                                <Textarea style={[styleCommon.border, styleCommon.font, !!this.state.errorReason ? styleMessageError.errorBorder : '' ]} rowSpan={3} bordered placeholder={this.renderTextReason()}
                                    value={this.state.reason}
                                    onChangeText={(text) => this.setState({ reason: text })} 
                                    onBlur={() => {
                                        this.setState({
                                            errorReason: validatejs('required', this.state.reason)
                                        });
                                    }}
                                    />
                                <Text style={styleMessageError.errorColorText}>{this.state.errorReason}</Text>
                            </View>
                        </View>
                        <View  style={styleCommon.vItemButton}>
                            {buttonUpdate}
                            <Button full primary style={[styleCommon.itemButton, styleCommon.itemButtonColorNotMain]} onPress={() => this.props.navigation.navigate('Offtime')}>
                                <Text style={styleCommon.itemButtonNotMain}>BACK</Text>
                            </Button>
                        </View>
                    </Form>
                </Content>
                <View>
					<Spinner visible={isLoading} textContent={"Loading..."} textStyle={{ color: '#FFF' }} />
				</View>
            </Container>
        )
    }
}
/*============================================================================*/
const mapStateToProps = (state) => {
	return {
		userInfo		:	state.auth.userInfo,
		userList		:	state.auth.listUser,
        token			:	state.auth.token,
        approveList     :   state.auth.approveList,
        flexTimeType    :   state.auth.flexTimeType,
        branch          :   state.auth.branch
	};
}
const mapDispatchToProps = (dispatch) => {
	return {
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(EditFlextime);
/*============================================================================*/