import {StyleSheet} from 'react-native';
import {Metrics} from '../../src/dimensions/Metrics';
const styles = StyleSheet.create({
  container: {
    width: '100%',
    zIndex: 99,
    position: 'relative',
  },
  inside_container: {
    width: '100%',
  },
  image: {
    width: Metrics.deviceWidth,
    height: Metrics.deviceHeight / 1.7,
    resizeMode: 'cover',
  },
  contained_image: {
    width: Metrics.deviceWidth,
    height: Metrics.deviceHeight / 2.5,
    resizeMode: 'contain',
  },
});

export default styles;
