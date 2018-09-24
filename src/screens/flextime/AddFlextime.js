/**
*| Component        :   App
*| Author       	:   ANS817 - havv@ans-asia.com
*| Created date 	:   2018-07-11
*| Description   	:   Add Flextime
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
    Image, 
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
}   from 'native-base';
import { connect }              from 'react-redux';
import Moment                   from 'moment';
import SectionedMultiSelect     from 'react-native-sectioned-multi-select';
import DateTimePicker           from 'react-native-modal-datetime-picker';
import Spinner                  from 'react-native-loading-spinner-overlay';
//import api
import { getInfoApi } 	        from '../../app/api/common';
import { listUserApi } 	        from '../../app/api/common';
import { listLibraryCodeApi } 	from '../../app/api/common';
import { getFlextimeApi }       from '../../app/api/offtime';
import { addFlextimeApi }       from '../../app/api/offtime';
//import component
import HeaderComponent          from '../../app/components/HeaderComponent';
import { ItemDateTime }         from '../../app/components/ItemDateTimeComponent';
import { ItemDateTimeFromTo }   from '../../app/components/ItemDateTimeFromTo';
import { Loading }              from '../../app/components/Common';
import { setDateHorizontal }    from '../../app/components/Common';
import stylesDrawerNavigator    from '../../app/stylesheet/DrawerNavigator';
import _                        from "lodash";
// import styles
import { 
    DEVICE_WIDTH, 
    COLOR_TEXT, 
    styleCommon, 
    colorsSelect, 
    itemSelect,
    styleMessageError,
    COLOR_MAIN
}   from '../../app/stylesheet/Common';
// import validate
import { 
    validatejs, 
    validateDateFromTo
}   from '../../app/components/Validate';

const SCREEN_NAME = "Add Flextime";
//class Flextime addrrr
class AddFlextime extends Component {
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
        title: "Add Flextime",
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
            isLoading           : false,
            listUser            : [],
            listType            : [],
            requester_id        : [],
            flextime_type       : [],
            approver_id         : [],
            flextime_date       : new Date(),
            flextime_time_from  : '',
            flextime_time_to    : '',
            reason              : '',
            userInfo            : {},
            dateHorizontal: 'row',
            // message error
            errorFlextimeType: '',
            errorApprover: '',
            errorDate: '',
            errorTimeFrom: '',
            errorTimeTo: '',
            // errorTimeFromTo: {
            //     from: '',
            //     to: ''
            // },
            errorReason: '',
            isValidateDateTime: false
        };
    };
    // render text for item Flextime Type
    _renderTextFlexTimeType = () => {
        var text = '';
        if (this.state.flextime_type[0]) {
            text = this.state.flextime_type[0].name;
        } else {
            text = 'Flextime Type';
        }
        return text;
    };
    // render text for item Approver
    _renderTextApprover = () => {
        var text = '';
        text = 'Approver';
        return text;
    };
    // render text for item FlextimeDate
    _renderTextFlextimeDate = () => {
        var text = '';
        if (this.state.flextime_date == '') {
            text = Moment(new Date()).format('YYYY/MM/DD');
        } else {
            // flextime_date is exist then display flextime_date
            text = Moment(this.state.flextime_date).format('YYYY/MM/DD');
        }
        return text;
    };
    // render text for item FlextimeTimeFrom, FlextimeTimeTo
    _renderTextFlextimeTime = (time, isFrom) => {
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

    // render text for item Reason
    _renderTextReason = () => {
        var text = '';
        // reason is not exist then display text
        text = 'Reason';
        return text;
    };
    addFlexTime = async() => {
        let data        =   await this.getDataRequest();
        let check       =   await this.checkData(data);
        if (check) {
            Alert.alert(
              'Confirm',
              'Do you want to insert flextime',
              [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => this.saveData(data)},
              ],
              { cancelable: false }
            )
        }
    }
    saveData = async(data) => {
        await this.setState({isLoading : true});
        let response    =   await addFlextimeApi(data);
        if (response.data.status) {
            Alert.alert(
              'Success',
              'Flextime have been saved successfully',
              [
                {text: 'OK', onPress: () => this.props.navigation.navigate('Offtime')},
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
        await this.setState({isLoading : false});
    }
    checkData(data) {
        //Trieunb - Update code - 2018/09/10
        let isValidate = true;
        this.setState({
            errorFlextimeType   : validatejs('required', data.flextime_type),
            errorApprover       : validatejs('required', data.approver_id),
            errorDate           : validatejs('required', data.flextime_date),
            // errorTimeFrom       : validatejs('required', data.flextime_time_from),
            // errorTimeTo         : validatejs('required', data.flextime_time_to),
            errorReason         : validatejs('required', data.reason),
            isValidateDateTime  : true
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
            flextime_id         :   0,
            requester_id        :   this.state.requester_id[0],
            flextime_type       :   this.state.flextime_type[0],
            flextime_date       :   this.state.flextime_date,
            flextime_time_from  :   !!this.state.flextime_time_from ? Moment(this.state.flextime_time_from).format('HHmm') : '',
            flextime_time_to    :   !!this.state.flextime_time_to ?  Moment(this.state.flextime_time_to).format('HHmm') : '',
            repeat_div			:   '',
            repeat_interval		:   1,
            repeat_from			:   '',
            repeat_end			:   '',
            repeat_day			:   '',
            reason              :   this.state.reason,
            approver_id         :   this.state.approver_id,
            branch_id           :   this.props.branch.branch_id,
            user_id             :   this.state.userInfo.user_id,
        }
        return data;
    }
    componentWillMount() {
        this.setState({
            listUser        :   this.props.userList,
            approver_id     :   this.props.approveList,
            userInfo        :   this.props.userInfo,
            requester_id    :   [this.props.userInfo.user_id],
            listType        :   this.props.flexTimeType,
            dateHorizontal  :   setDateHorizontal(DEVICE_WIDTH)
        });
        // add event
        Dimensions.addEventListener('change', () => {
            let deviceWidth = Dimensions.get('window').width;
            this.setState({
                dateHorizontal: setDateHorizontal(deviceWidth)
            });
        });
    }
    componentWillReceiveProps = (nextProps) => {
		//set state
		this.setState({
            listUser        :   nextProps.userList,
            userInfo        :   nextProps.userInfo,
            approver_id     :   nextProps.approveList,
            requester_id    :   [nextProps.userInfo.user_id],
            listType        :   nextProps.flexTimeType,
        });
	}
    render() {
        //setState render
        const { userInfo, listUser, listType, isLoading }    =   this.state
        let formRequest;
		if (this.state.userInfo.user_auth != 0) {
            formRequest =   <View style={[styleCommon.vItem, styleCommon.border]}>
                                <View style={styleCommon.vIcon}>
                                    <Icon active name='person' style={styleCommon.iconFont} />
                                </View>
                                <View style={itemSelect.vSelect}>
                                    <SectionedMultiSelect
                                        items={listUser}
                                        single={true}
                                        uniqueKey='user_id'
                                        displayKey='user_display'
                                        selectText={userInfo.user_id + ' : ' + userInfo.full_name}
                                        confirmText={'Request'}
                                        searchPlaceholderText='Search Requester'
                                        showCancelButton={true}
                                        colors={colorsSelect}
                                        styles={{ selectToggle: itemSelect.selectToggle }}
                                        onSelectedItemsChange={(selectedItems) => {
                                            this.setState({ requester_id: selectedItems });
                                        }}
                                        selectedItems={this.state.requester_id}
                                        showDropDowns={false}
                                    />
                                </View>
                            </View>
        } else {
            formRequest =   <View style={[styleCommon.vItem, styleCommon.border, styleCommon.disabled]}>
                                <View style={styleCommon.vIcon}>
                                    <Icon active name='person' style={styleCommon.iconFont}/>
                                </View>
                                <Text>{userInfo.user_id + ' : ' + userInfo.full_name}</Text>
                            </View>
        }
        return (
            <Container>
                <Content>
                    <Form>
                        <View style={styleCommon.vWrap}>
                            {formRequest}
                            <View style={[styleCommon.vItem, styleCommon.border, !!this.state.errorFlextimeType ? styleMessageError.errorBorder : '']}>
                                <View style={styleCommon.vIcon}>
                                    <Icon active name='keypad' style={styleCommon.iconFont} />
                                </View>
                                <View style={itemSelect.vSelect}>
                                    <SectionedMultiSelect
                                        items={listType}
                                        single={true}
                                        hideSearch={true}
                                        uniqueKey='number'
                                        displayKey='name'
                                        selectText={this._renderTextFlexTimeType()}
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

                            <View style={[styleCommon.vItem, styleCommon.border, !!this.state.errorApprover ? styleMessageError.errorBorder : '']}>
                                <View style={styleCommon.vIcon}>
                                    <Icon active name='people' style={styleCommon.iconFont}/>
                                </View>
                                <View style={itemSelect.vSelect}>
                                    <SectionedMultiSelect
                                        items={listUser}
                                        uniqueKey='user_id'
                                        displayKey='user_display'
                                        selectText={this._renderTextApprover()}
                                        confirmText='Select'
                                        searchPlaceholderText='Search Approver'
                                        showCancelButton={true}
                                        showChips={false}
                                        colors={colorsSelect}
                                        styles={{ selectToggle: itemSelect.selectToggle }}

                                        onSelectedItemsChange={(selectedItems) => {
                                            this.setState({
                                                approver_id: selectedItems,
                                                errorApprover: validatejs('required', selectedItems)
                                            });
                                        }}
                                        selectedItems={this.state.approver_id}
                                    />
                                </View>
                            </View>
                            <View style={!!this.state.errorApprover ? styleMessageError.viewError : styleMessageError.viewNone}>
                                <Text style={styleMessageError.errorColorText}>{this.state.errorApprover}</Text>
                            </View>

                            <ItemDateTime
                                textDateTime={this._renderTextFlextimeDate()}
                                mode='date'
                                onDateTimeSelected={(date) => {
                                    this.setState({
                                        flextime_date: date,
                                        errorDate: validatejs('checkDateCompareCurrentDate', Moment(date).format('YYYY-MM-DD'))
                                    });
                                }}
                                dateTime={this.state.flextime_date}
                                errorDate={this.state.errorDate}
                            />
                            <ItemDateTimeFromTo
                                textDateTimeFrom={this._renderTextFlextimeTime(this.state.flextime_time_from, true)}
                                textDateTimeTo={this._renderTextFlextimeTime(this.state.flextime_time_to, false)}
                                mode='time'
                                onDateTimeFromSelected={(time) => this.setState({
                                    flextime_time_from: time,
                                    isValidateDateTime  : true
                                })}
                                onDateTimeToSelected={(time) => this.setState({
                                    flextime_time_to: time,
                                    isValidateDateTime  : true
                                })}
                                dateFrom={this.state.flextime_time_from}
                                dateTo={this.state.flextime_time_to}
                                dateHorizontal={this.state.dateHorizontal}
                                validate={this.state.isValidateDateTime}
                                valDateFromTo={this.checkDateFromTo}
                                // errorTimeFromTo={this.state.errorTimeFromTo}
                            />
                            <View style={styleCommon.vItem}>
                                <View style={styleCommon.vTextArea}>
                                    <Textarea
                                        style={[styleCommon.border, styleCommon.font, !!this.state.errorReason ? styleMessageError.errorBorder : '' ]}
                                        rowSpan={3}
                                        placeholder={this._renderTextReason()}
                                        onChangeText={(text) => this.setState({ reason: text })}
                                        placeholderTextColor={COLOR_TEXT}
                                        onBlur={() => {
                                            this.setState({
                                                errorReason: validatejs('required', this.state.reason)
                                            });
                                        }}
                                    />
                                    <Text style={styleMessageError.errorColorText}>{this.state.errorReason}</Text>
                                </View>
                            </View>
                            <View style={styleCommon.vItemButton}>
                                <Button full primary style={[styleCommon.itemButton, styleCommon.itemButtonColorMain]} onPress={() => this.addFlexTime()}>
                                    <Text style={styleCommon.itemButtonMain}>SAVE</Text>
                                </Button>
                                <Button full primary style={[styleCommon.itemButton, styleCommon.itemButtonColorNotMain]} onPress={() => this.props.navigation.navigate('Offtime')}>
                                    <Text style={styleCommon.itemButtonNotMain}>CANCEL</Text>
                                </Button>
                            </View>
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
export default connect(mapStateToProps, mapDispatchToProps)(AddFlextime);
/*============================================================================*/