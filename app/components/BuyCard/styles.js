import {StyleSheet} from 'react-native';
import {Metrics} from '../../src/dimensions/Metrics';
const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'white',
    padding: 8,
  },
  discount_container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 3,
  },
  price_title: {
    fontSize: Metrics.deviceWidth / 35,
    color: 'black',
    fontWeight: 'bold',
    margin: 2,
  },
  real_price: {
    fontSize: Metrics.deviceWidth / 35,
    color: 'green',
    fontWeight: 'bold',
    margin: 2,
  },
  discount_title: {
    fontSize: Metrics.deviceWidth / 40,
    color: 'white',
    fontWeight: 'bold',
    margin: 10,
  },
  button_style: {
    width: '100%',
    height: 40,
    backgroundColor: '#00a680',
  },
  button_title_style: {
    fontSize: Metrics.deviceWidth / 25,
    color: 'white',
  },
});

export default styles;
