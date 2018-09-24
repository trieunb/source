/**
*| Component        : DayOff
*| Author       	: ANS804 - daonx@ans-asia.com
*| Modify           : ANS806 - trieunb@ans-asia.com
*| Created date 	: 2018-08-09
*| Update date 		: 2018-09-06
*| Description   	: Edit DayOff
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
    COLOR_MAIN
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

class EditDayOff extends Component {
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
        title: "Edit DayOff",
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
            isValidateDateTime: false
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
        text = 'Note';

        return text;
    };

    addDayOff = async () => {
        let data = await this.getDataRequest();
        console.log(data);
        // let response = await addDayOffApi(data);
        // Alert.alert(
        //     'Save Success!'
        // )
    }

    getDataRequest = () => {
        let data = {
            requesterId: this.state.requesterId,
            dayOffType: this.state.dayOffType,
            approver_id: this.state.approver_id,
            dateFrom: this.state.dateFrom,
            dateTo: this.state.dateTo,
            reason: this.state.reason,
            note: this.state.note,
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
                                            this.setState({ requesterId: selectedItems });
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
                            <View style={[styleCommon.vItem, styleCommon.border]}>
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
                                            this.setState({ approver_id: selectedItems });
                                        }}
                                        selectedItems={this.state.approver_id}
                                    />
                                </View>
                            </View>

                            {/* Date off type */}
                            <View style={[styleCommon.vItem, styleCommon.border]}>
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
                                            this.setState({ dayOffType: selectedItems });
                                        }}
                                        selectedItems={this.state.dayOffType}
                                    />
                                </View>
                            </View>

                            {/* Date From To */}
                            <ItemDateTimeFromTo
                                textDateTimeFrom={this._renderTextDayOff(this.state.dateFrom, true)}
                                textDateTimeTo={this._renderTextDayOff(this.state.dateTo, false)}
                                mode='date'
                                // datePickerModeAndroid='calendar'
                                onDateTimeFromSelected={(time) => this.setState({ dateFrom: time, isValidateDateTime: true })}
                                onDateTimeToSelected={(time) => this.setState({ dateTo: time, isValidateDateTime: true })}
                                dateFrom={this.state.dateFrom == '' ? new Date() : this.state.dateFrom}
                                dateTo={this.state.dateTo == '' ? new Date() : this.state.dateTo}
                                dateHorizontal={this.state.dateHorizontal}
                                validate={this.state.isValidateDateTime}
								valDateFromTo={this.checkDateFromTo}
                            />

                            {/* Reason */}
                            <View style={styleCommon.vItem}>
                                <View style={styleCommon.vTextArea}>
                                    <Textarea
                                        style={[styleCommon.border, styleCommon.font]}
                                        rowSpan={3}
                                        placeholder={this._renderTextReason()}
                                        onChangeText={(text) => this.setState({ reason: text })}
                                        placeholderTextColor={COLOR_TEXT} />
                                </View>
                            </View>

                            {/* Note */}
                            <View style={styleCommon.vItem}>
                                <View style={styleCommon.vTextArea}>
                                    <Textarea
                                        style={[styleCommon.border, styleCommon.font]}
                                        rowSpan={3}
                                        placeholder={this._renderTextNote()}
                                        onChangeText={(text) => this.setState({ note: text })}
                                        placeholderTextColor={COLOR_TEXT}/>
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
export default connect(mapStateToProps, mapDispatchToProps)(EditDayOff);
/*============================================================================*/