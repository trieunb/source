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