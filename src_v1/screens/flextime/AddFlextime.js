/**
*| Component        : App
*| Author       	: ANS817 - havv@ans-asia.com
*| Created date 	: 2018-07-11
*| Description   	: Add Flextime
*/
/*============================================================================*/
//import library
import React, { Component } from "react";
import {
    StyleSheet, View, Text, Alert
} from "react-native";
import {
    Container, Content, Form, Icon,
    Item, Picker,
    Input,
    DatePicker,
    Textarea,
    Button
} from 'native-base'
import Moment from 'moment';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import DateTimePicker from 'react-native-modal-datetime-picker';
//import api
import { addFlextimeApi } from '../../app/api/flextime';
//import component
import HeaderComponent from '../../app/components/HeaderComponent';
import { ItemDateTime } from '../../app/components/ItemDateTimeComponent';
import { ItemDateTimeFromTo } from '../../app/components/ItemDateTimeFromTo';

// import styles
import { styleCommon, itemSelect } from '../../app/stylesheet/Common';

// import data
import dataFlextime from './data/AddFlextime';

const SCREEN_NAME = "Add Flextime";

class AddFlextime extends Component {
    // constructor
    constructor(props) {
        super(props);

        this.state = {
            // requester_id: [{ "user_id": "123", "user_name": "123: Ng\u1ecdc Client", "branch_id": "1", "department_id": "2" }]
            requester_id: [],
            flextime_type: [],
            approver_id: [],
            // flextime_date: new Date(2017, 5, 5),
            flextime_date: '',
            flextime_time_from: '',
            flextime_time_to: '',
            reason: ''
        };
    };

    static navigationOptions = ({ navigation }) => ({
        title: SCREEN_NAME,
        // headerLeft: <Icon name="ios-menu" style={{ paddingLeft: 10 }} onPress={() => navigation.navigate('DrawerOpen')} />,
        drawerLabel: SCREEN_NAME,
        drawerIcon: ({ tintColor }) => (
            <Icon name="timer" />
        ),
        headerTitleStyle: {
            textAlign: "center",
            flex: 1
        },
    });

    // render text for item Requester
    _renderTextRequester = () => {
        var text = '';

        if (this.state.requester_id[0]) {
            // requester_id is exist then display requester_nm
            text = this.state.requester_id[0].user_name;
        } else {
            // requester_id is not exist then display text
            // text = <Text>Requester<Text style={styleCommon.required} > *</Text></Text>;
            text = 'Requester';
        }

        return text;
    };

    // render text for item Flextime Type
    _renderTextFlexTimeType = () => {
        var text = '';

        if (this.state.flextime_type[0]) {
            // flextime_type is exist then display flextime_type_name
            text = this.state.flextime_type[0].name;
        } else {
            // flextime_type is not exist then display text
            // text = <Text>Flextime Type<Text style={styleCommon.required} > *</Text></Text>;
            text = 'Flextime Type';
        }

        return text;
    };

    // render text for item Approver
    _renderTextApprover = () => {
        var text = '';

        // Approver is not exist then display text
        // text = <Text>Approver<Text style={styleCommon.required} > *</Text></Text>;
        text = 'Approver';

        return text;
    };

    // render text for item FlextimeDate
    _renderTextFlextimeDate = () => {
        var text = '';

        if (this.state.flextime_date == '') {
            // flextime_date is not exist then display text
            // text = <Text>Flextime Date<Text style={styleCommon.required} > *</Text></Text>;
            text = 'Flextime Date';
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
                // text = <Text>Time From<Text style={styleCommon.required} > *</Text></Text>;
                text = 'Time From';
            } else {
                //item to
                // text = <Text>Time To<Text style={styleCommon.required} > *</Text></Text>;
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
        let response    =   await addFlextimeApi(data);
        console.log(response.data.result);
        Alert.alert(
            'Save Success!'
        )
    }
    getDataRequest = () => {
        let data = {
            requester_id        :   this.state.requester_id,
            flextime_type       :   this.state.flextime_type,
            approver_id         :   this.state.approver_id,
            flextime_date       :   this.state.flextime_date,
            flextime_time_from  :   this.state.flextime_time_from,
            flextime_time_to    :   this.state.flextime_time_to,
            reason              :   this.state.reason
        }
        return data;
    }
    render() {
        return (
            <Container>
                <HeaderComponent title={SCREEN_NAME} drawerOpen={() => this.props.navigation.toggleDrawer()} />
                <Content>
                    <Form>
                        <View style={{ backgroundColor: 'white' }}>
                            <View style={styleCommon.vItem}>
                                <View style={styleCommon.vIcon}>
                                    <Icon active name='person' />
                                </View>
                                <View style={itemSelect.vSelect}>
                                    <SectionedMultiSelect
                                        items={dataFlextime.listUser}
                                        single={true}
                                        uniqueKey='user_id'
                                        displayKey='user_name'
                                        selectText={this._renderTextRequester()}
                                        confirmText='Select'
                                        searchPlaceholderText='Search Requester'
                                        showCancelButton={true}
                                        colors={{ chipColor: '#0066ff' }}
                                        styles={{ selectToggle: itemSelect.selectToggle }}
                                        onSelectedItemsChange={(selectedItems) => {
                                            this.setState({ requester_id: selectedItems });
                                        }}
                                        selectedItems={this.state.requester_id}
                                    />
                                </View>
                            </View>

                            <View style={styleCommon.vItem}>
                                <View style={styleCommon.vIcon}>
                                    <Icon active name='keypad' />
                                </View>
                                <View style={itemSelect.vSelect}>
                                    <SectionedMultiSelect
                                        items={dataFlextime.flextimeType}
                                        single={true}
                                        hideSearch={true}
                                        uniqueKey='number'
                                        displayKey='name'
                                        selectText={this._renderTextFlexTimeType()}
                                        confirmText='Select'
                                        searchPlaceholderText='Search Flextime Type'
                                        showCancelButton={true}
                                        colors={{ chipColor: '#0066ff' }}
                                        styles={{ selectToggle: itemSelect.selectToggle }}
                                        onSelectedItemsChange={(selectedItems) => {
                                            this.setState({ flextime_type: selectedItems });
                                        }}
                                        selectedItems={this.state.flextime_type}
                                    />
                                </View>
                            </View>

                            <View style={styleCommon.vItem}>
                                <View style={styleCommon.vIcon}>
                                    <Icon active name='people' />
                                </View>
                                <View style={itemSelect.vSelect}>
                                    <SectionedMultiSelect
                                        items={dataFlextime.listUser}
                                        uniqueKey='user_id'
                                        displayKey='user_name'
                                        selectText={this._renderTextApprover()}
                                        confirmText='Select'
                                        searchPlaceholderText='Search Approver'
                                        showCancelButton={true}
                                        showChips={false}
                                        colors={{ chipColor: '#0066ff' }}
                                        styles={{ selectToggle: itemSelect.selectToggle }}

                                        onSelectedItemsChange={(selectedItems) => {
                                            this.setState({ approver_id: selectedItems });
                                        }}
                                        selectedItems={this.state.approver_id}
                                    />
                                </View>
                            </View>

                            <ItemDateTime
                                textDateTime={this._renderTextFlextimeDate()}
                                mode='date'
                                onDateTimeSelected={(date) => this.setState({ flextime_date: date })}
                                dateTime={this.state.flextime_date == '' ? new Date() : this.state.flextime_date}
                            />

                            <ItemDateTimeFromTo
                                textDateTimeFrom={this._renderTextFlextimeTime(this.state.flextime_time_from, true)}
                                textDateTimeTo={this._renderTextFlextimeTime(this.state.flextime_time_to, false)}
                                mode='time'
                                datePickerModeAndroid='spinner'
                                onDateTimeFromSelected={(time) => this.setState({ flextime_time_from: time })}
                                onDateTimeToSelected={(time) => this.setState({ flextime_time_to: time })}
                                dateFrom={this.state.flextime_time_from == '' ? new Date() : this.state.flextime_time_from}
                                dateTo={this.state.flextime_time_to == '' ? new Date() : this.state.flextime_time_to}
                            />

                            <View style={styleCommon.vItem}>
                                <View style={styleCommon.vTextArea}>
                                    <Textarea rowSpan={5} bordered placeholder={this._renderTextReason()} 
                                    onChangeText={(text) => this.setState({ reason: text }) }/>
                                </View>
                            </View>


                            <View style={[styleCommon.vItem, { justifyContent: 'space-evenly' }]}>
                                <Button primary style={styleCommon.button} onPress={this.addFlexTime}>
                                    <Text>SAVE</Text>
                                </Button>
                                <Button bordered primary style={styleCommon.button}>
                                    <Text>CANCEL</Text>
                                </Button>
                            </View>
                        </View>
                    </Form>
                </Content>
            </Container>
        )
    }
}

export default AddFlextime;
