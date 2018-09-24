import { View, TextInput, } from 'react-native';
// validate
import validate     from 'validate.js';
// moment
import moment       from 'moment';
import _            from "lodash";
validate.extend(validate.validators.datetime, {
    parse: function (value, options) {
        return +moment.utc(value);
    },
    format: function (value, options) {
        var format = options.dateOnly ? "YYYY-MM-DD" : "YYYY-MM-DD HH:mm";
        return moment.utc(value).format(format);
    }
});
// create validate check dateTime from to
validate.validators.checkDateTimeFromTo = function (value, options, key, attributes) {
    if (options !== null && typeof options !== 'undefinded' && typeof options == 'object') {
        let source = value.source;

        // check required
        let checkRequired = source == 'from' ? value.valueFrom : value.valueTo;
        if (checkRequired == '') {
            return '^Required'
        }
        // check time
        if (options.type == 'time') {
            let timeStart = moment(moment().format('YYYY-MM-DD') + ' 08:30', 'YYYY-MM-DD HH:mm').format('YYYY-MM-DD HH:mm');
            let timeFinish = moment(moment().format('YYYY-MM-DD') + ' 17:30', 'YYYY-MM-DD HH:mm').format('YYYY-MM-DD HH:mm');
            let timeFrom = value.valueFrom;
            let timeTo = value.valueTo;

            //check time valid
            let timeCompare = source == 'from' ? timeFrom : timeTo;
            if (moment(timeCompare).isBefore(timeStart) || moment(timeCompare).isAfter(timeFinish)) {
                return '^Only choose from 08:30 to 17:30'
            }
            
            // check time from to
            if (moment(timeFrom).isAfter(timeTo)) {
                return '^Time To must be greater Time From'
            }
            let checkTimeFrom = !!timeFrom ? moment(moment(timeFrom, 'YYYY-MM-DD HH:mm')).add(2, 'hours').format('YYYY-MM-DD HH:mm') : undefined; 
            let checkTimeTo = !!timeTo ? moment(moment(timeTo, 'YYYY-MM-DD HH:mm')).subtract(2, 'hours').format('YYYY-MM-DD HH:mm') : undefined;
            // check time from <= 2 hours time to
            if (timeFrom != null && timeTo != null) {
                return (moment(checkTimeFrom).isBefore(timeTo)) || (moment(checkTimeTo).isAfter(timeFrom)) ? '^Only registered 2 hours' : undefined;
            }
            
        }
    }
    return undefined;
};


const constraints = {
    required: {
        presence: {
            message: "^Required",
            allowEmpty: false
        },
    },
    checkDateCompareCurrentDate: {
        datetime: {
            dateOnly: true,
            earliest: moment().format('YYYY-MM-DD'),
            message: "^Date must be greater or equal with current date"
        }
    },
    // checkTimeFromTo: {
    //     checkDateTimeFromTo: {
    //         type: 'time'
    //     }
    // },
}

// export const validateDateTimeFromTo = (params) => {
//     let attributes = {};
//     attributes['checkTimeFromTo'] = params;
    
//     let result = validate(attributes, constraints);
    
//     if (typeof result !== "undefined") {
//         return result && result['checkTimeFromTo'] && result['checkTimeFromTo'][0];
//     }
//     return result;
// }

export const validatejs = (name, value, condition) => {
    let rule = {};
    let attributes = {};
    
    if (condition !== null && typeof condition == "object" && typeof condition !== "undefined") {        
        rule = { ...constraints, ...condition };
    } else {
        rule = { ...constraints };
    }

    attributes[name] = value;

    let result = validate(attributes, rule);
    
    if (typeof result !== "undefined") {
        return result && result[name] && result[name][0];
    }
    return undefined;
}

export const validateDateFromTo = (from, to, mode) => {
    if (mode == 'time') {
        from    =   _.isDate(from) ? moment(from).format('HHmm') : '';
        to      =   _.isDate(to) ? moment(to).format('HHmm') : '';
    } else {
        from    =   _.isDate(from) ? moment(from).format('YYYYMMDDHHmm') : '';
        to      =   _.isDate(to) ? moment(to).format('YYYYMMDDHHmm') : '';
    }
    
    if (from == '' || to == '') {
        return {
            status  : false,
            message : ''
        };
    }
    if ((from !== '' && to !== '')) {
        if (from > to) {
            return {
                status  : false,
                message : 'The To Time must be greater than or equal the From Time'
            };
        }
        if (mode == 'time' && (to-from > 200 || from == to)) {
            return {
                status  : false,
                message : 'Flextime must be greater than 0 and less than 2 hours'
            };
        }
    }
    return {
        status  : true,
        message : ''
    };
}