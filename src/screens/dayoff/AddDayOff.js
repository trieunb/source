/**
*| Component        : DayOff
*| Author       	: ANS804 - daonx@ans-asia.com
*| Modify           : ANS806 - trieunb@ans-asia.com
*| Created date 	: 2018-08-09
*| Update date 		: 2018-09-06
*| Description   	: Insert DayOff
*/
/*============================================================================*/
//import library
import React, { Component } from "react";
import {
    StyleSheet,
    View,
    Text,
    Alert,
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
//import api
import { addDayOffApi }         from '../../app/api/offtime';
//import component
import HeaderComponent          from '../../app/components/HeaderComponent';
import { ItemDateTimeFromTo }   from '../../app/components/ItemDateTimeFromTo';
import { setDateHorizontal }    from '../../app/components/Common';
//import styles common
import {
    DEVICE_WIDTH,
    COLOR_TEXT,
    colorsSelect,
    styleCommon,
    itemInput,
    itemSelect,
    form,
    COLOR_MAIN,
    styleMessageError,
}   from '../../app/stylesheet/Common';
// import validate
import { 
    validatejs, 
    validateDateFromTo
}   from '../../app/components/Validate';
// import styles DrawerNavigator
// import data
import dataDayOff from './data/DayOff';

const SCREEN_NAME = "DayOff";

class AddDayOff extends Component {
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
        title: "Add DayOff",
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
            isLoading       : false,
            requesterId     : [],
            listDayOffType  : [],
            dayOffType      : [],
            approver_id     : [],
            dateFrom        : '',
            dateTo          : '',
            reason          : '',
            note            : '',
            listUser        : [],
            dateHorizontal  : 'row',
            errorRequesterId: '',
            errorDayOffType: '',
            errorApproverid: '',
            errorReason: '',
            errorNote: '',
            isValidateDateTime: false,
        };
    };
    componentWillMount() {
        this.setState({
            dateHorizontal  : setDateHorizontal(DEVICE_WIDTH),
            listUser        : this.props.userList,
            userInfo        : this.props.userInfo,
            requesterId     : [this.props.userInfo.user_id],
            approver_id     : this.props.approveList,
            listDayOffType  : this.props.dayOffType
        });        
        // add event
        Dimensions.addEventListener('change', () => {
            let deviceWidth = Dimensions.get('window').width;        
            this.setState({
                dateHorizontal: setDateHorizontal(deviceWidth)
            });
        });
    }
    // render text for item Requester
    _renderTextRequester = () => {
        var text = '';

        if (this.state.requesterId[0]) {
            text = this.state.requesterId[0].user_name;
        } else {
            text = 'Requester';
        }

        return text;
    }

    // render text for item Flextime Type
    _renderTextDateOffType = () => {
        var text = '';
        text = 'DayOff Type';
        return text;
    };

    // render text for item Approver
    _renderTextApprover = () => {
        var text = '';
        text = 'Approver';
        return text;
    };

    // render text for item Date From, Date To
    _renderTextDayOff = (time, isFrom) => {
        var text = '';

        if (time == '') {
            if (isFrom) {
                text = 'Date From';
            } else {
                text = 'Date To';
            }
        } else {
            text = Moment(time).format('YYYY/MM/DD');
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

    // render text for item Note
    _renderTextNote = () => {
        var text = '';
        text = 'Backup công việc:';

        return text;
    };

    addDayOff = async () => {
        let data    =   await this.getDataRequest();
        console.log(data);
        let check   =   await this.checkData(data);
        if (check) {
            Alert.alert(
              'Confirm',
              'Do you want to Insert DayOff',
              [
                {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                {text: 'OK', onPress: () => this.saveData(data)},
              ],
              { cancelable: false }
            )
        }
    }
    saveData = async(data) => {
        await Alert.alert('Ok');
        await this.setState({isLoading : true});
        let response    =   await addDayOffApi(data);
        console.log(response);
        // if (response.data.status) {
        //     Alert.alert(
        //       'Success',
        //       'DayOff have been saved successfully',
        //       [
        //         {text: 'OK', onPress: () => this.props.navigation.navigate('Offtime')},
        //       ],
        //       { cancelable: false }
        //     )
        // }
        await this.setState({isLoading : false});
    }
    checkData(data) {
        //Trieunb - Update code - 2018/09/10
        let isValidate = true;
        this.setState({
            errorApproverid     : validatejs('required', data.approver_id),
            errorDayOffType     : validatejs('required', data.dayOffType),
            errorReason         : validatejs('required', data.reason),
            errorNote           : validatejs('required', data.note),
            isValidateDateTime  : true
        });
        if (typeof this.state.errorDayOffType !== 'undefined') {
            isValidate  =    false;
        }
        if (typeof this.state.errorApproverid !== 'undefined') {
            isValidate  =    false;
        }
        if (!this.checkDateFromTo(this.state.dateFrom, this.state.dateTo, 'date').status) {
            isValidate  =    false;
        }
        if (typeof this.state.errorReason !== 'undefined') {
            isValidate  =    false;
        }
        if (typeof this.state.errorNote !== 'undefined') {
            isValidate  =    false;
        }
        return isValidate;
    }
    getDataRequest = () => {
        let data = {
            requesterId     : this.state.requesterId,
            dayOffType      : this.state.dayOffType,
            approver_id     : this.state.approver_id,
            dateFrom        : this.state.dateFrom,
            dateTo          : this.state.dateTo,
            reason          : this.state.reason,
            note            : this.state.note,
            branch_id       : this.props.branch.branch_id,
            user_id         : this.state.userInfo.user_id,
        }
        return data;
    }
    checkDateFromTo = (from, to, mode) => {
        return validateDateFromTo(from, to, mode);
    }
    render() {
        //setState render
        const { listUser, userInfo, listDayOffType }    =   this.state
        return (
            <Container>
                <Content>
                    <Form>
                        <View style={styleCommon.vWrap}>
                            {/* Requester */}
                            <View style={[styleCommon.vItem, styleCommon.border]}>
                                <View style={styleCommon.vIcon}>
                                    <Icon active name='person' style={styleCommon.iconFont}/>
                                </View>
                                <View style={itemSelect.vSelect}>
                                    <SectionedMultiSelect
                                        items={listUser}
                                        single={true}
                                        uniqueKey='user_id'
                                        displayKey='user_display'
                                        selectText={userInfo.user_id + ' : ' + userInfo.full_name}
                                        confirmText='Select'
                                        searchPlaceholderText='Search Requester'
                                        showCancelButton={true}
                                        colors={colorsSelect}
                                        styles={{ selectToggle: itemSelect.selectToggle }}
                                        onSelectedItemsChange={(selectedItems) => {
                                            this.setState({ 
                                                requesterId     : selectedItems,
                                                errorRequesterId: validatejs('required', selectedItems)
                                            });
                                        }}
                                        selectedItems={this.state.requesterId}
                                    />
                                </View>
                            </View>

                            {/* Remaining hours */}
                            <View style={[styleCommon.vItem, styleCommon.border]}>
                                <View style={styleCommon.vIcon}>
                                    <Icon active name='md-alarm' style={styleCommon.iconFont}/>
                                </View>
                                <View style={itemSelect.vSelect}>
                                    <Input style={[styleCommon.font, itemInput.alignInput]} placeholder="Remaining hours" placeholderTextColor={COLOR_TEXT} />
                                </View>
                            </View>

                            {/* Approver */}
                            <View style={[styleCommon.vItem, styleCommon.border, !!this.state.errorApproverid ? styleMessageError.errorBorder : '']}>
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
                                                errorApproverid: validatejs('required', selectedItems) 
                                            });
                                        }}
                                        selectedItems={this.state.approver_id}
                                    />
                                </View>
                            </View>
                            <View style={!!this.state.errorApproverid ? styleMessageError.viewError : styleMessageError.viewNone}>
                                <Text style={styleMessageError.errorColorText}>{this.state.errorApproverid}</Text>
                            </View>
                            {/* Date off type */}
                            <View style={[styleCommon.vItem, styleCommon.border, !!this.state.errorDayOffType ? styleMessageError.errorBorder : '']}>
                                <View style={styleCommon.vIcon}>
                                    <Icon active name='keypad' style={styleCommon.iconFont} />
                                    {/* selectToggleTextColor: */}
                                </View>
                                <View style={itemSelect.vSelect}>
                                    <SectionedMultiSelect
                                        items={listDayOffType}
                                        single={true}
                                        hideSearch={true}
                                        uniqueKey='number'
                                        displayKey='name'
                                        selectText={this._renderTextDateOffType()}
                                        confirmText='Select'
                                        searchPlaceholderText='Date off type'
                                        showCancelButton={true}
                                        colors={colorsSelect}
                                        styles={{ selectToggle: itemSelect.selectToggle }}
                                        onSelectedItemsChange={(selectedItems) => {
                                            this.setState({ 
                                                dayOffType: selectedItems, 
                                                errorDayOffType: validatejs('required', selectedItems)
                                            });
                                        }}
                                        selectedItems={this.state.dayOffType}
                                    />
                                </View>
                            </View>
                            <View style={!!this.state.errorDayOffType ? styleMessageError.viewError : styleMessageError.viewNone}>
                                <Text style={styleMessageError.errorColorText}>{this.state.errorDayOffType}</Text>
                            </View>
                            {/* Date From To */}
                            <ItemDateTimeFromTo
                                textDateTimeFrom={this._renderTextDayOff(this.state.dateFrom, true)}
                                textDateTimeTo={this._renderTextDayOff(this.state.dateTo, false)}
                                mode='date'
                                onDateTimeFromSelected={(time) => this.setState({ 
                                                                    dateFrom: time, 
                                                                    isValidateDateTime: true })}
                                onDateTimeToSelected={(time) => this.setState({ 
                                                                    dateTo: time, 
                                                                    isValidateDateTime: true })}
                                dateFrom={this.state.dateFrom}
                                dateTo={this.state.dateTo}
                                dateHorizontal={this.state.dateHorizontal}
                                validate={this.state.isValidateDateTime}
								valDateFromTo={this.checkDateFromTo}
                            />

                            {/* Reason */}
                            <View style={styleCommon.vItem}>
                                <View style={styleCommon.vTextArea}>
                                    <Textarea
                                        style={[styleCommon.border, styleCommon.font, !!this.state.errorReason ? styleMessageError.errorBorder : '']}
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

                            {/* Note */}
                            <View style={styleCommon.vItem}>
                                <View style={styleCommon.vTextArea}>
                                    <Textarea
                                        style={[styleCommon.border, styleCommon.font, !!this.state.errorNote ? styleMessageError.errorBorder : '']}
                                        rowSpan={3}
                                        placeholder={this._renderTextNote()}
                                        onChangeText={(text) => this.setState({ note: text })}
                                        placeholderTextColor={COLOR_TEXT}
                                        onBlur={() => {
                                            this.setState({
                                                errorNote: validatejs('required', this.state.note)
                                            });
                                        }}
                                        />
                                        <Text style={styleMessageError.errorColorText}>{this.state.errorNote}</Text>
                                </View>
                            </View>

                            <View style={styleCommon.vItemButton}>
                                <Button full primary 
                                    style={[styleCommon.itemButton, styleCommon.itemButtonColorMain]}
                                    onPress={() =>  {this.addDayOff()}}        
                                >
                                    <Text style={styleCommon.itemButtonMain}>SAVE</Text>
                                </Button>
                            </View>
                        </View>
                    </Form>
                </Content>
            </Container>
        )
    }
}
// export default DayOff;
/*============================================================================*/
const mapStateToProps = (state) => {
	return {
		userInfo		:	state.auth.userInfo,
		userList		:	state.auth.listUser,
        approveList     :   state.auth.approveList,
        dayOffType      :   state.auth.dayOffType,
        branch          :   state.auth.branch
	};
}
const mapDispatchToProps = (dispatch) => {
	return {
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(AddDayOff);
/*============================================================================*/