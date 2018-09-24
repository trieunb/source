import { StyleSheet, Dimensions } from 'react-native';

export const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const BETWEEN_PARENT = 15;
const BETWEEN_CHILD = 5;
const FONT_SIZE = 16;
const BORDER_RADIUS_CONTROL = 5;
export const COLOR_TEXT = '#767676';
export const COLOR_MAIN = '#2A7BEF';
export const colorsSelect =  {
	chipColor: '#0066ff',
	selectToggleTextColor: '#767676',
	primary: COLOR_MAIN,
	success: COLOR_MAIN,
}
export const loginInput = StyleSheet.create({
	input: {
		backgroundColor: 'rgba(255, 255, 255, 0.4)',
		width: DEVICE_WIDTH - 40,
		height: 40,
		marginHorizontal: 20,
		paddingLeft: 45,
		borderRadius: 20,
		color: '#262626',
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
	vWrap: {
		backgroundColor: 'white'
	},
	disabled: {
		backgroundColor: '#bdc3c7'
	},
	vItem: {
		flex: 1,
		flexDirection: 'row',
		marginLeft: BETWEEN_PARENT,
		marginRight: BETWEEN_PARENT,
		marginTop: BETWEEN_PARENT,
	},
	vItemButton: { 
		marginHorizontal: BETWEEN_PARENT,
		marginVertical: BETWEEN_PARENT 
	},
	vIcon: {
		justifyContent: 'center',
		alignItems: 'flex-start',
		marginRight: BETWEEN_CHILD,
		width: 20,
	},
	vTextArea: {
		flex: 1,
	},
	button: {
		paddingHorizontal: 10,
		minWidth: 100,
		justifyContent: 'center',
	},
	border: {
		padding: 10,
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: '#bdc3c7',
		borderRadius: BORDER_RADIUS_CONTROL,
	},
	font: {
		fontSize: FONT_SIZE,
		color: COLOR_TEXT,
	},
	iconFont: {
		justifyContent: 'center',
		fontSize: 18,
		color: COLOR_MAIN
	},
	itemInput: {
		paddingLeft: 10,
		paddingVertical: 0,
	},
	header: {
		backgroundColor: 'white',
		borderBottomWidth: 1,
		borderBottomColor: '#D4D4D4'
	},
	itemButton: {
		borderRadius: BORDER_RADIUS_CONTROL,
		marginVertical: BETWEEN_CHILD,
		elevation: 0
	},
	itemButtonColorMain: {
		backgroundColor: COLOR_MAIN
	},
	itemButtonColorNotMain: {
		backgroundColor: 'white',
		borderWidth: 1,
		borderColor: COLOR_MAIN
	},
	itemButtonMain: {
		color: 'white',
		fontSize: 18,
	},
	itemButtonNotMain: {
		color: COLOR_MAIN,
		fontSize: 18,
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
	alignInput: {
		paddingVertical: 0,
		height: 28,
		paddingLeft: 0
	}
});
// style of ItemDate
export const itemDate = StyleSheet.create({
	vDate: {
		flex: 1,
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
		color: COLOR_TEXT,
		paddingHorizontal: 0,
	}
});
// style of ItemDateFromTo
export const itemDateFromTo = StyleSheet.create({
	vItem: {
		justifyContent: 'space-between',
	},
	vItemFrom: {
		width: 140,
		flexDirection: 'row',
	},
	vItemTo: {
		width: 140,
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
		paddingVertical: 0,
		paddingHorizontal: 0,
		// backgroundColor: 'white'
	},
});
// style message error
export const styleMessageError = StyleSheet.create({
	viewError: {
		marginLeft: 15,
		marginRight: 15,
		height: 15
	},
	viewNone: {
		height: 0
	},
	errorColorText: {
		color: '#FF514D',
	},
	errorBorder: {
		borderColor: '#FF514D',
	},	
});