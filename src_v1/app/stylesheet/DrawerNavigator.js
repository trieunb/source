
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
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
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
    marginRight: 10,  
    marginLeft: 20, 
    color: '#444'
  }
})
