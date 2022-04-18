import React, {useState} from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {selectBasket} from '../../store/basket';
import PropTypes from 'prop-types';

const BasketCount = props => {
  const {backgroundColor} = props;
  const basket = useSelector(selectBasket);
  if (basket?.length > 0) {
    return (
      <View style={[styles.container, {backgroundColor: backgroundColor}]}>
        <Text style={styles.title}>{basket?.length}</Text>
      </View>
    );
  } else {
    return <View />;
  }
};

BasketCount.propTypes = {
  backgroundColor: PropTypes.string.isRequired,
};

export default BasketCount;

const styles = StyleSheet.create({
  container: {
    borderRadius: 999,
    width: 18,
    height: 18,
    position: 'absolute',
    top: -7,
    right: -10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 9,
    color: 'white',
  },
});
