import {StyleSheet} from 'react-native';
import {Metrics} from '../../src/dimensions/Metrics';
const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderColor: '#e6e6e6',
  },
  columns: {
    width: '100%',
    flexDirection: 'row',
  },
  rows: {
    flex: 1,
    marginLeft: 5,
  },
  image: {
    width: '100%',
    height: Metrics.deviceHeight / 5,
    flexDirection: 'row',
    resizeMode: 'cover',
  },
  title: {
    fontSize: Metrics.deviceWidth / 34,
    color: 'black',
    width: '100%',
  },
  price: {
    fontSize: Metrics.deviceWidth / 34,
    color: 'black',
    width: '100%',
    textAlign: 'right',
    right: 5,
  },
});

export default styles;
