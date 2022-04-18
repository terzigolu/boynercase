import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import styles from './styles';
import globalStyles from '../../src/styles';
import {Button} from 'react-native-elements';
import {useDispatch} from 'react-redux';
import {addToBasket} from '../../store/basket';

const BuyCard = props => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View
        style={[
          globalStyles.columns,
          {justifyContent: 'center', alignItems: 'center'},
        ]}>
        <View style={[globalStyles.rows, {flex: 0.3}]}>
          <View style={styles.discount_container}>
            <Text style={styles.discount_title}>%25</Text>
          </View>
        </View>
        <View style={globalStyles.rows}>
          <Text
            style={[
              styles.price_title,
              {textDecorationLine: 'line-through', color: 'grey'},
            ]}>
            699 TL
          </Text>
          <Text style={[styles.real_price]}>399.99 TL</Text>
        </View>
        <View style={[globalStyles.rows, {flex: 0.9}]}>
          <Button
            onPress={() => {
              dispatch({type: addToBasket.type, payload: props.item});
            }}
            titleStyle={styles.button_title_style}
            containerStyle={styles.button_container_style}
            buttonStyle={styles.button_style}
            title={'Sepete Ekle'}
          />
        </View>
      </View>
    </View>
  );
};

export default BuyCard;
