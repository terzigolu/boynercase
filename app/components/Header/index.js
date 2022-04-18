import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import BasketCount from '../BasketCount';

const Header = props => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <View style={styles.columns}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          activeOpacity={1}
          style={styles.rows}>
          <Icon name={'chevron-left'} size={20} color={'black'} />
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={1}
          style={[styles.rows, {alignItems: 'flex-end', flex: 0.1}]}>
          <Icon name={'external-link'} size={25} color={'black'} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('BasketBottom');
          }}
          activeOpacity={1}
          style={[styles.rows, {alignItems: 'flex-end', flex: 0.15}]}>
          <BasketCount backgroundColor={'#00a680'} />
          <Icon name={'shopping-bag'} size={25} color={'black'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
