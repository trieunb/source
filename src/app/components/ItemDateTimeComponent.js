/**
*| Component        : App
*| Author       	: ANS817 - havv@ans-asia.com
*| Created date 	: 2018-07-05
*| Description   	: Item DateTime Component
*/
/*============================================================================*/
//import library
import React, { Component } from 'react';
import { View, Text } from "react-native";
import { Icon } from 'native-base';
import PropTypes from 'prop-types';
import DateTimePicker from 'react-native-modal-datetime-picker';
// import styles
import { styleCommon, itemDate, styleMessageError } from '../stylesheet/Common';

//get props pf DatePicker
var propTypes = DateTimePicker.propTypes;

export class ItemDateTime extends Component {
    // constructor
    constructor(props) {
        super(props);

        this.state = {
            isVisible: false,
            dateTime: this.props.dateTime,
        };
    };

    //props Type of DateTimePicker component
    static propTypes = {
        ...propTypes,
        onConfirm: PropTypes.func,
        onCancel: PropTypes.func,
    };

    // event show DateTimePicker
    _showDateTimePicker = () => this.setState({ isVisible: true });

    // event hide DateTimePicker
    _hideDateTimePicker = () => this.setState({ isVisible: false });

    // event selected date/time in DateTimePicker
    _handleDateTimePicked = dateTime => {
        // event selected date/time on view main
        this.props.onDateTimeSelected(dateTime);
        // set state dateTime
        this.setState({ dateTime: dateTime });
        // hide DateTimePicker
        this._hideDateTimePicker();
    };

    render() {
        // props custom of component ItemDateTime
        var props = {
            cancelTextIOS: this.props.cancelTextIOS,
            cancelTextStyle: this.props.cancelTextStyle,
            confirmTextIOS: this.props.confirmTextIOS,
            confirmTextStyle: this.props.confirmTextStyle,
            customCancelButtonIOS: this.props.customCancelButtonIOS,
            customConfirmButtonIOS: this.props.customConfirmButtonIOS,
            neverDisableConfirmIOS: this.props.neverDisableConfirmIOS,
            customTitleContainerIOS: this.props.customTitleContainerIOS,
            customDatePickerIOS: this.props.customDatePickerIOS,
            datePickerContainerStyleIOS: this.props.datePickerContainerStyleIOS,
            reactNativeModalPropsIOS: this.props.reactNativeModalPropsIOS,
            date: this.state.dateTime,
            mode: this.props.mode,
            isVisible: this.state.isVisible,
            datePickerModeAndroid: this.props.datePickerModeAndroid,
            onConfirm: this._handleDateTimePicked,
            onHideAfterConfirm: this.props.onHideAfterConfirm,
            pickerRefCb: this.props.pickerRefCb,
            onCancel: this._hideDateTimePicker,
            titleIOS: this.props.titleIOS,
            titleStyle: this.props.titleStyle,
            minimumDate: this.props.minimumDate,
            maximumDate: this.props.maximumDate,
            is24Hour: this.props.is24Hour,
            minuteInterval: this.props.minuteInterval,
        };

        return (
            <View>
                <View style={[styleCommon.vItem, styleCommon.border, !!this.props.errorDate ? styleMessageError.errorBorder : '']}>
                    <View style={styleCommon.vIcon}>
                        <Icon active name={this.props.mode == 'time' ? 'clock' : 'calendar'} style={styleCommon.iconFont}/>
                    </View>

                    <View style={itemDate.vDate}>
                        <Text
                            style={itemDate.textDate}
                            onPress={this._showDateTimePicker}
                        >
                            {this.props.textDateTime}
                        </Text>
                        <DateTimePicker {...props} />
                    </View>
                    
                </View>
                
                <View style={!!this.props.errorDate ? styleMessageError.viewError : styleMessageError.viewNone}>
                    <Text style={styleMessageError.errorColorText}>{this.props.errorDate}</Text>
                </View>
            </View >
        )
    }
};
