/**
*| Component        : App
*| Author       	: ANS817 - havv@ans-asia.com
*| Created date 	: 2018-07-30
*| Description   	: Item DateTime From To Component
*/
/*============================================================================*/
//import library
import React, { Component } from 'react';
import { View, Text }       from "react-native";
import { Icon }             from 'native-base';
import PropTypes            from 'prop-types';
import DateTimePicker       from 'react-native-modal-datetime-picker';
import _                    from "lodash";
import moment               from 'moment';
// import styles
import { DEVICE_WIDTH, styleCommon, itemDate, itemDateFromTo, styleMessageError } from '../stylesheet/Common';

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
            isValidate: true,
            message   : ''
        };
    };

    //props Type of DateTimePicker component
    static propTypes = {
        ...propTypes,
        onConfirm: PropTypes.func,
        onCancel: PropTypes.func,
    };
    // componentWillMount = () =>  {
    //     console.log(this.props.validate)
    // }
    componentWillReceiveProps = (nextProps) => {
        let mode        =   nextProps.mode
        // let dateFrom    =   _.isDate(nextProps.dateFrom) ? moment(nextProps.dateFrom).format('YYYYMMDDHHmm') : '';
        // let dateTo      =   _.isDate(nextProps.dateTo) ? moment(nextProps.dateTo).format('YYYYMMDDHHmm') : '';
        if (nextProps.validate || this.state.isVisibleFrom || this.state.isVisibleTo) {
            this.setState({
                isValidate  :   nextProps.valDateFromTo(nextProps.dateFrom, nextProps.dateTo, mode).status,
                message     :   nextProps.valDateFromTo(nextProps.dateFrom, nextProps.dateTo, mode).message
            });
        }
    }
    // event show DateTimeFromPicker, DateTimeToPicker
    _showDateTimeFromPicker = () => this.setState({ isVisibleFrom: true });
    _showDateTimeToPicker = () => this.setState({ isVisibleTo: true });

    // event hide DateTimeFromPicker, DateTimeToPicker
    _hideDateTimeFromPicker = () => {
        this.setState({
            isVisibleFrom: false
        });
        // this.props.cancelFrom(this.state.dateTimeFrom);
    }
    _hideDateTimeToPicker = () => {
        this.setState({
            isVisibleTo: false
        });
        // this.props.cancelTo(this.state.dateTimeTo);
    }

    // event selected date/time from in DateTimePicker
    _handleDateTimeFromPicked = dateTime => {
        this.props.onDateTimeFromSelected(dateTime);
        this.setState({ dateTimeFrom: dateTime });
        this._hideDateTimeFromPicker();
        // console.log(this.props.errorTimeFromTo);
    };

    // event selected date/time to in DateTimePicker
    _handleDateTimeToPicked = dateTime => {
        this.props.onDateTimeToSelected(dateTime);
        this.setState({ dateTimeTo: dateTime });
        this._hideDateTimeToPicker();
        // console.log(this.props.errorTimeFromTo);
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

        // set type time
        var typeTime = this.props.mode == 'time' ? 'clock' : 'calendar';

        // css date box when width of emulator change
        var vWrap, vItemDate, vSeparator;

        if (this.props.dateHorizontal == 'row') {
            vWrap = {
                flexDirection: 'row'
            };
            vItemDate = {
                width: 140
            };
            vSeparator = {
                justifyContent: 'center',
                alignItems: 'center'
            }
        } else if (this.props.dateHorizontal == 'row-start') {
            vWrap = {
                flexDirection: 'row',
                justifyContent: 'flex-start'
            };
            vSeparator = {
                width: 45,
                opacity: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }
        } else {
            vWrap = {
                flexDirection: 'column'
            };
            vItemDate = {
                width: '100%'
            };
            vSeparator = {
                opacity: 0,
                height: 15
            }
        }
        const {isValidate, message} = this.state;
        return (
            <View style={{flexDirection:'column'}}>
                <View style={[styleCommon.vItem, itemDateFromTo.vItem, vWrap]}>
                    <View style={[itemDateFromTo.vItemFrom, 
                                    styleCommon.border, 
                                    vItemDate, 
                                    (!isValidate && !_.isDate(this.props.dateFrom)) ? styleMessageError.errorBorder : '',
                                    (!isValidate) ? styleMessageError.errorBorder : ''
                                ]}>
                        <View style={styleCommon.vIcon}>
                            <Icon active name={typeTime} style={styleCommon.iconFont} />
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

                    <View style={[ vSeparator ]}>
                        <Text style={{fontSize: 25}} >~</Text>
                    </View>

                    <View style={[itemDateFromTo.vItemTo, 
                                    styleCommon.border, 
                                    vItemDate, 
                                    (!isValidate && !_.isDate(this.props.dateTo)) ? styleMessageError.errorBorder : '',
                                    (!isValidate) ? styleMessageError.errorBorder : ''
                                ]}>
                        <View style={styleCommon.vIcon}>
                            <Icon active name={typeTime} style={styleCommon.iconFont} />
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
                <View style={!isValidate ? styleMessageError.viewError : styleMessageError.viewNone}>
                    <Text style={styleMessageError.errorColorText}>{message}</Text>
                </View>
            </View >
        )
    }
};
