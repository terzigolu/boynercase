import {StyleSheet} from 'react-native';
import {Metrics} from '../../src/dimensions/Metrics';
const styles = StyleSheet.create({
  safe: {
    width: '100%',
    height: '100%',
  },
  container: {
    width: '100%',
    backgroundColor: 'white',
    padding: 15,
    borderBottomWidth: 1.5,
    borderColor: '#e6e6e6',
  },
  name: {
    fontSize: Metrics.deviceWidth / 25,
    marginLeft: 10,
    marginTop: 10,
    fontWeight: '600',
  },
  title: {
    color: 'black',
    fontSize: Metrics.deviceWidth / 30,
    marginLeft: 10,
    marginTop: 5,
    fontWeight: '400',
  },
});

export default styles;
