
import {
    StyleSheet
} from 'react-native';

const BORDER_COLOR = '#272C35';
const LABLE_COLOR = '#CBCED5';
const SIZE_AVATAR = 80;

export default styles = StyleSheet.create({
    container: {
        backgroundColor: '#373E48'
    },
    drawerHeader: {
        height: 120,
        backgroundColor: 'white',
    },
    bodyContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    drawerImage: {
        height: SIZE_AVATAR,
        width: SIZE_AVATAR,
        borderRadius: SIZE_AVATAR/2
    },
    title: {
        marginTop: 10,
        fontWeight: 'normal',
        color: 'black'
    },

    itemLogout: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 0,
        borderTopWidth: 1,
        borderTopColor: BORDER_COLOR
    },
    label: {
        margin: 16,
        fontWeight: 'bold',
        color: 'rgba(0, 0, 0, .87)',
    },
    iconContainer: {
        marginHorizontal: 16,
        width: 24,
        alignItems: 'center',
    },
    icon: {
        color: LABLE_COLOR,
        fontSize: 22
    },
    itemStyle: {
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: BORDER_COLOR
    },
    iconContainerStyle: {
        width: 60,
        alignItems: 'center',
        marginHorizontal: 16,
        marginLeft: 0,
        paddingVertical: 15,
        borderRightWidth: 1,
        borderRightColor: BORDER_COLOR
    },
    labelStyle: {
        margin: 16,
        color: LABLE_COLOR,
        fontSize: 15,
        fontWeight: 'normal'
    },
})
