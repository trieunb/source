
import {
  StyleSheet
} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  drawerHeader: {
    height: 100,
    backgroundColor: 'white',
  },
  bodyContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10
  },
  drawerImage: {
    height: 80,
    width: 80,
    borderRadius: 75,
    marginLeft: 20
  },
  title: {
    width: 200,
    marginLeft: 10,
    fontWeight: '700'
  }
})
