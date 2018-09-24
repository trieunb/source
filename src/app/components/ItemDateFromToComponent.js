/**
*| Component        : App
*| Author       	: ANS817 - havv@ans-asia.com
*| Created date 	: 2018-07-05
*| Description   	: Item Input Component (has: icon, label, input)
*/
/*============================================================================*/
//import library
import React, { Component } from 'react';
import { View, Text } from "react-native";
import { Icon, DatePicker } from 'native-base';
import PropTypes from 'prop-types';
// import styles
import { styleCommon, itemDate, itemDateFromTo } from '../stylesheet/Common';

//get props pf DatePicker
var propTypes = DatePicker.propTypes;

export class ItemDateFromTo extends Component {
    // constructor
    constructor(props) {
        super(props);
    };

    static propTypes = {
        ...propTypes,
        ref: PropTypes.func,
    };

    render() {
        var propsFrom = {
            date: this.props.dateFrom,
            onDateChange: this.props.onDateFromChange,
            maximumDate: this.props.maximumDateFrom,
            minimumDate: this.props.minimumDateFrom,
            minuteInterval: this.props.minuteIntervalFrom,
            ref: this.props.inputRefFrom,
        };
        var propsTo = {
            date: this.props.dateTo,
            onDateChange: this.props.onDateToChange,
            maximumDate: this.props.maximumDateTo,
            minimumDate: this.props.minimumDateTo,
            minuteInterval: this.props.minuteIntervalTo,
            ref: this.props.inputRefTo,
        };

        return (
            <View style={[styleCommon.vItem, itemDateFromTo.vItem]}>
                <View style={itemDateFromTo.vItemFrom}>
                    <View style={styleCommon.vIcon}>
                        <Icon active name='calendar' />
                    </View>

                    <View style={itemDate.vDate}>
                        <DatePicker
                            mode="date"
                            defaultDate={new Date()}
                            locale={"en"}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText={
                                <Text>
                                    Date From
                                <Text style={styleCommon.required} >{this.props.isRequired == true ? ' *' : ''}</Text>
                                </Text>
                            }
                            placeHolderTextStyle={itemDate.placeHolderTextStyle}
                            textStyle={itemDate.textStyle}
                            {...propsFrom}
                        />
                    </View>
                </View>
                <View style={itemDateFromTo.vItemTo}>
                    <View style={styleCommon.vIcon}>
                        <Icon active name='calendar' />
                    </View>

                    <View style={itemDate.vDate}>
                        <DatePicker
                            mode="date"
                            defaultDate={new Date()}
                            locale={"en"}
                            timeZoneOffsetInMinutes={undefined}
                            modalTransparent={false}
                            animationType={"fade"}
                            androidMode={"default"}
                            placeHolderText={
                                <Text>
                                    Date To
                                <Text style={styleCommon.required} >{this.props.isRequired == true ? ' *' : ''}</Text>
                                </Text>
                            }
                            placeHolderTextStyle={itemDate.placeHolderTextStyle}
                            textStyle={itemDate.textStyle}
                            {...propsTo}
                        />
                    </View>
                </View>
            </View>
        )
    }
};

