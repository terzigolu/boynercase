import {StyleSheet} from 'react-native';
import {Metrics} from '../../src/dimensions/Metrics';
const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20,
  },
  inside_container: {
    width: '90%',
  },
  columns: {
    width: '100%',
    flexDirection: 'row',
  },
  rows: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: Metrics.deviceWidth / 23,
    fontWeight: 'bold',
    color: 'black',
  },
  item_container: {
    width: '100%',
    padding: 15,
  },
  item_title: {
    margin: 5,
  },
  apply_button: {
    marginTop: 5,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  apply_button_inside: {
    width: '90%',
    backgroundColor: '#f2f2f2f2',
    borderWidth: 1,
    borderColor: '#00a680',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  apply_button_title: {
    fontSize: Metrics.deviceWidth / 25,
    color: '#00a680',
  },
});
export default styles;
