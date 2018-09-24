/**
*| Component        : App
*| Author       	: ANS817 - havv@ans-asia.com
*| Created date 	: 2018-07-30
*| Description   	: Item DateTime From To Component
*/
/*============================================================================*/
//import library
import React, { Component } from 'react';
import { View, Text } from "react-native";
import { Icon } from 'native-base';
import PropTypes from 'prop-types';
import DateTimePicker from 'react-native-modal-datetime-picker';
// import styles
import { styleCommon, itemDate, itemDateFromTo } from '../stylesheet/Common';

//get props pf DatePicker
var propTypes = DateTimePicker.propTypes;

export class ItemDateTimeFromTo extends Component {
    // constructor
    constructor(props) {
        super(props);

        this.state = {
            isVisibleFrom: false,
            isVisibleTo: false,
            dateTimeFrom: this.props.dateTimeFrom,
            dateTimeTo: this.props.dateTimeTo,
        };
    };

    //props Type of DateTimePicker component
    static propTypes = {
        ...propTypes,
        onConfirm: PropTypes.func,
        onCancel: PropTypes.func,
    };

    // event show DateTimeFromPicker, DateTimeToPicker
    _showDateTimeFromPicker = () => this.setState({ isVisibleFrom: true });
    _showDateTimeToPicker = () => this.setState({ isVisibleTo: true });

    // event hide DateTimeFromPicker, DateTimeToPicker
    _hideDateTimeFromPicker = () => this.setState({ isVisibleFrom: false });
    _hideDateTimeToPicker = () => this.setState({ isVisibleTo: false });

    // event selected date/time from in DateTimePicker
    _handleDateTimeFromPicked = dateTime => {
        this.props.onDateTimeFromSelected(dateTime);
        this.setState({ dateTimeFrom: dateTime });
        this._hideDateTimeFromPicker();
    };

    // event selected date/time to in DateTimePicker
    _handleDateTimeToPicked = dateTime => {
        this.props.onDateTimeToSelected(dateTime);
        this.setState({ dateTimeTo: dateTime });
        this._hideDateTimeToPicker();
    };

    render() {
        // props custom of component ItemDateTimeFrom
        var propsFrom = {
            cancelTextIOS: this.props.cancelTextFromIOS,
            cancelTextStyle: this.props.cancelTextFromStyle,
            confirmTextIOS: this.props.confirmTextFromIOS,
            confirmTextStyle: this.props.confirmTextFromStyle,
            customCancelButtonIOS: this.props.customCancelButtonFromIOS,
            customConfirmButtonIOS: this.props.customConfirmButtonFromIOS,
            neverDisableConfirmIOS: this.props.neverDisableConfirmFromIOS,
            customTitleContainerIOS: this.props.customTitleFromContainerIOS,
            customDatePickerIOS: this.props.customDatePickerFromIOS,
            datePickerContainerStyleIOS: this.props.datePickerFromContainerStyleIOS,
            reactNativeModalPropsIOS: this.props.reactNativeModalPropsFromIOS,
            date: this.state.dateTimeFrom,
            mode: this.props.mode,
            isVisible: this.state.isVisibleFrom,
            datePickerModeAndroid: this.props.datePickerModeAndroid,
            onConfirm: this._handleDateTimeFromPicked,
            onHideAfterConfirm: this.props.onHideAfterConfirmFrom,
            pickerRefCb: this.props.fromPickerRefCb,
            onCancel: this._hideDateTimeFromPicker,
            titleIOS: this.props.titleFromIOS,
            titleStyle: this.props.titleFromStyle,
            minimumDate: this.props.minimumDateFrom,
            maximumDate: this.props.maximumDateFrom,
            is24Hour: this.props.is24Hour,
            minuteInterval: this.props.minuteInterval,
        };

        // props custom of component ItemDateTimeTo
        var propsTo = {
            cancelTextIOS: this.props.cancelTextToIOS,
            cancelTextStyle: this.props.cancelTextToStyle,
            confirmTextIOS: this.props.confirmTextToIOS,
            confirmTextStyle: this.props.confirmTextToStyle,
            customCancelButtonIOS: this.props.customCancelButtonToIOS,
            customConfirmButtonIOS: this.props.customConfirmButtonToIOS,
            neverDisableConfirmIOS: this.props.neverDisableConfirmToIOS,
            customTitleContainerIOS: this.props.customTitleToContainerIOS,
            customDatePickerIOS: this.props.customDatePickerToIOS,
            datePickerContainerStyleIOS: this.props.datePickerToContainerStyleIOS,
            reactNativeModalPropsIOS: this.props.reactNativeModalPropsToIOS,
            date: this.state.dateTimeTo,
            mode: this.props.mode,
            isVisible: this.state.isVisibleTo,
            datePickerModeAndroid: this.props.datePickerModeAndroid,
            onConfirm: this._handleDateTimeToPicked,
            onHideAfterConfirm: this.props.onHideAfterConfirmTo,
            pickerRefCb: this.props.toPickerRefCb,
            onCancel: this._hideDateTimeToPicker,
            titleIOS: this.props.titleToIOS,
            titleStyle: this.props.titleToStyle,
            minimumDate: this.props.minimumDateTo,
            maximumDate: this.props.maximumDateTo,
            is24Hour: this.props.is24Hour,
            minuteInterval: this.props.minuteInterval,
        };

        return (
            <View style={[styleCommon.vItem, itemDateFromTo.vItem]}>
                <View style={itemDateFromTo.vItemFrom}>
                    <View style={styleCommon.vIcon}>
                        <Icon active name={this.props.mode == 'time' ? 'clock' : 'calendar'} />
                    </View>

                    <View style={itemDate.vDate}>
                        <Text
                            style={itemDate.textDate}
                            onPress={this._showDateTimeFromPicker}
                        >
                            {this.props.textDateTimeFrom}
                        </Text>
                        <DateTimePicker {...propsFrom} />
                    </View>
                </View>

                <View style={itemDateFromTo.vItemTo}>
                    <View style={styleCommon.vIcon}>
                        <Icon active name={this.props.mode == 'time' ? 'clock' : 'calendar'} />
                    </View>

                    <View style={itemDate.vDate}>
                        <Text
                            style={itemDate.textDate}
                            onPress={this._showDateTimeToPicker}
                        >
                            {this.props.textDateTimeTo}
                        </Text>
                        <DateTimePicker {...propsTo} />
                    </View>
                </View>
            </View>
        )
    }
};

