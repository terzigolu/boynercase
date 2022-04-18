import {StyleSheet} from 'react-native';
import {Metrics} from '../../src/dimensions/Metrics';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    margin: 5,
    marginTop: 20,
  },
  image: {
    flex: 1,
    aspectRatio: 0.72,
  },
  title_section: {
    flex: 1,
    justifyContent: 'center',
  },
  favorite_section: {
    flex: 0.25,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  title: {
    color: 'black',
    fontWeight: '400',
    fontSize: Metrics.deviceWidth / 30,
  },
  desc: {
    fontWeight: '400',
    fontSize: Metrics.deviceWidth / 30,
  },
  color_container: {
    position: 'absolute',
    bottom: 10,
    right: 8,
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255,255, 1)',
    opacity: 0.9,
  },
  color_title: {
    fontSize: Metrics.deviceWidth / 40,
    margin: 5,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default styles;
