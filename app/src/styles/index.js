import {StyleSheet} from 'react-native';
import {Metrics} from '../dimensions/Metrics';
const globalStyles = StyleSheet.create({
  flex_centered_container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centered_container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centered_inside_container: {
    width: '90%',
  },
  columns: {
    width: '100%',
    flexDirection: 'row',
  },
  rows: {
    flex: 1,
    margin: 5,
  },
  button_style: {
    width: '100%',
    height: 40,
    borderRadius: 5,
    backgroundColor: 'transparent',
  },
  button_container_style: {
    width: '100%',
    height: 40,
    borderRadius: 5,
  },
  button_title_style: {
    fontSize: Metrics.deviceWidth / 30,
    color: 'black',
    fontWeight: '400',
  },
});

export default globalStyles;
