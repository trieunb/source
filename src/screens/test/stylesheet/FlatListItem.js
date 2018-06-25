import {StyleSheet} from "react-native";
const FlatListItem = StyleSheet.create({
  containerFlatList: {
    flex: 1,
    flexDirection: 'column'
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
    fontSize: 16
  },
  borderLine: {
    height: 2,
    backgroundColor: 'black'
  },
  itemApprove:{
    flex: 1,
    flexDirection: 'row'
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
