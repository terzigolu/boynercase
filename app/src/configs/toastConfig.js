import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Touchable,
} from 'react-native';
import {Metrics} from '../dimensions/Metrics';
import {BaseToast} from 'react-native-toast-message';

export const toastConfig = {
  info: props => (
    <View onPress={props.onPress} style={styles.container}>
      <Text style={styles.title}>{props.text1}</Text>
    </View>
  ),
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: Metrics.deviceWidth - (Metrics.deviceWidth - 12.5),
    width: Metrics.deviceWidth - 25,
    justifyContent: 'center',
    height: Metrics.deviceHeight / 10,
    borderRadius: 10,
    backgroundColor: '#f2f2f2f2',
    top: 0,
    zIndex: 999,
  },
  title: {
    fontSize: Metrics.deviceWidth / 25,
    color: 'black',
    marginLeft: 20,
  },
});
