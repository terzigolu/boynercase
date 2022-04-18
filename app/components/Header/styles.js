import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'absolute',
    top: 50,
    zIndex: 999,
    padding: 20,
  },
  columns: {
    width: '100%',
    flexDirection: 'row',
  },
  rows: {
    flex: 1,
    margin: 5,
    justifyContent: 'center',
  },
});
export default styles;
