import { StyleSheet, Dimensions } from 'react-native';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const BETWEEN_PARENT = 20;
const BETWEEN_CHILD = 5;
const FONT_SIZE = 16;

export const loginInput = StyleSheet.create({
	input: {
		backgroundColor: 'rgba(255, 255, 255, 0.4)',
		width: DEVICE_WIDTH - 40,
		height: 40,
		marginHorizontal: 20,
		paddingLeft: 45,
		borderRadius: 20,
		color: '#ffffff',
	},
	inputWrapper: {
		flex: 1,
	},
	inlineImg: {
		position: 'absolute',
		zIndex: 99,
		width: 22,
		height: 22,
		left: 35,
		top: 9,
	},
});

export const wallpaper = StyleSheet.create({
	picture: {
		flex: 1,
		width: null,
		height: null,
	},
});

export const form = StyleSheet.create({
	input: {
		marginRight: 20,
		marginLeft: 20,
	},
	inputSelectMultip: {
		top: 50,
		position: 'relative',
		paddingTop: 20,
		paddingBottom: 60,
		paddingHorizontal: 15
	},
	groupDateFromTo: {
		flex: 1,
		flexDirection: 'row'
	},
	inputDate: {
		marginRight: 20,
		marginLeft: 20,
		height: 50,
		width: 150
	},
	checkBoxBody: {
		marginLeft: 10
	},
	btn: {
		margin: 20,
		position: 'relative',
		top: 50,
		width: DEVICE_WIDTH - '10%',
	},
	btnText: {
		color: 'white',
		fontWeight: '700'
	}
});

// style common
export const styleCommon = StyleSheet.create({
	required: {
		color: 'red'
	},
	vItem: {
		flex: 1,
		flexDirection: 'row',
		marginLeft: BETWEEN_PARENT,
		marginRight: BETWEEN_PARENT,
		marginTop: BETWEEN_PARENT,
	},
	vIcon: {
		justifyContent: 'flex-end',
		alignItems: 'flex-start',
		marginRight: BETWEEN_CHILD,
		width: 25,
	},
	vTextArea: {
		flex: 1,
	},
	button: {
		paddingHorizontal: 10,
		minWidth: 100,
		justifyContent: 'center',
	}
});
// style of ItemInput
export const itemInput = StyleSheet.create({
	floatingLbl: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'flex-start',
		marginBottom: -5,
	},
	floatingLblInput: {
		flex: 1,
		borderWidth: 0,
	},
});
// style of ItemDate
export const itemDate = StyleSheet.create({
	vDate: {
		flex: 1,
		// paddingLeft: BETWEEN_CHILD,
		// paddingRight: BETWEEN_CHILD,
	},
	placeHolderTextStyle: {
		// color: 'darkgray',
		fontSize: FONT_SIZE,
		borderBottomWidth: 1,
		borderBottomColor: 'darkgray',
		marginBottom: 0,
		paddingBottom: 0,
		width: 110,
	},
	textStyle: {
		fontSize: FONT_SIZE,
		borderBottomWidth: 1,
		borderBottomColor: 'darkgray',
		marginBottom: 0,
		paddingBottom: 0,
		width: 110,
	},
	textDate: {
		fontSize: FONT_SIZE,
		color: 'black',
		borderBottomWidth: 1,
		borderBottomColor: 'darkgray',
		paddingHorizontal: 10,
	}
});

// style of ItemDateFromTo
export const itemDateFromTo = StyleSheet.create({
	vItem: {
		justifyContent: 'space-between',
	},
	vItemFrom: {
		width: 160,
		flexDirection: 'row',
	},
	vItemTo: {
		width: 160,
		flexDirection: 'row',
	},
});

// style of ItemSelect
export const itemSelect = StyleSheet.create({
	vSelect: {
		flex: 1,
	},
	selectToggle: {
		marginTop: 0,
		marginBottom: 0,
		paddingLeft: 10,
		paddingRight: 0,
		paddingVertical: 0,
		borderRadius: 0,
		borderBottomWidth: 1,
		borderColor: '#ddd',
	},
});
