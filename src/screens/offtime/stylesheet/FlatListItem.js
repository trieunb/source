import {StyleSheet} from "react-native";
const FlatListItem = StyleSheet.create({
  containerFlatList: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF'
  },
  containerContent: {
    flex: 1,
    flexDirection: 'column'
  },
  containerItem: {
    flex: 1,
    flexDirection: 'row'
  },
  flatListItem: {
    padding: 2,
    fontSize: 16,
  },
  flatListItemBtn:{
    width: '58%',
  },
  textApprove:{
    position: 'absolute',
    top: 0,
    right: 0,
    fontSize: 18,
    padding: 2,
    color: '#3498db'
  },
  borderLine: {
    height: 2,
    backgroundColor: '#ecf0f1'
  },
  itemApprove:{
    flex: 1,
    flexDirection: 'row',
    width: '98%',
  },
  textUser:{
    fontWeight: '700'
  },
  avatar: {
    width: 100,
    height: 100,
    margin: 5
  }
});
export default FlatListItem
