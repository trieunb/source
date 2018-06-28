import { StyleSheet, Dimensions } from 'react-native';

const DEVICE_WIDTH  = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

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
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginRight: 20,
    marginLeft: 20,
  },
  inputSelectMultip:{
    top: 50,
    position: 'relative',
    paddingTop: 20,
    paddingBottom: 60,
    paddingHorizontal: 15
  },
  groupDateFromTo:{
    flex: 1,
    flexDirection: 'row'
  },
  inputDate:{
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
    width: DEVICE_WIDTH-'10%',
  },
  btnText:{
    color: 'white',
    fontWeight: '700'
  }
});
