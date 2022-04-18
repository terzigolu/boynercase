import {StyleSheet} from 'react-native';
import {Metrics} from '../../src/dimensions/Metrics';
const styles = StyleSheet.create({
  safe: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },
  main: {
    flex: 1,
    backgroundColor: '#f2f2f2f2',
  },
  container: {
    width: '100%',
    justifyContent: 'center',
  },
  basket_title_container: {
    width: '100%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 45,
  },
  basket_title: {
    fontSize: Metrics.deviceWidth / 20,
    fontWeight: 'bold',
    color: 'black',
    margin: 10,
  },
});

export default styles;
