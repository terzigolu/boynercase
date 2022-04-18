import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {Metrics} from '../../src/dimensions/Metrics';
import Icon from 'react-native-vector-icons/FontAwesome';
import Toast from 'react-native-simple-toast';
import {useDispatch} from 'react-redux';
import {deleteFromBasket} from '../../store/basket';

const BasketCard = props => {
  const {item, index} = props;
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate('ProductDetail', {
          item: item,
        });
      }}
      style={styles.container}>
      <View style={styles.columns}>
        <View style={[styles.rows, {flex: 0.5}]}>
          <Image source={{uri: item.PictureUrl}} style={styles.image} />
        </View>
        <View style={styles.rows}>
          <View style={styles.columns}>
            <View style={styles.rows}>
              <Text style={[styles.title, {fontWeight: 'bold'}]}>
                {item.ModelName}
              </Text>
              <Text style={styles.title}>Renk : {item.Color}</Text>
              <Text style={styles.title}>Beden : M</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                dispatch(deleteFromBasket(index));
                Toast.show('Ürün sepetten silindi.', Toast.LONG);
              }}
              style={[styles.rows, {flex: 0.2}]}>
              <Icon name={'close'} size={30} color={'black'} />
            </TouchableOpacity>
          </View>
          <View style={styles.columns}>
            <View style={styles.rows}>
              <Text style={[styles.title, {fontWeight: 'bold'}]}>Adet : 1</Text>
            </View>
            <View style={[styles.rows, {alignItems: 'flex-start'}]}>
              <Text
                style={[
                  styles.price,
                  {textDecorationLine: 'line-through', color: 'grey'},
                ]}>
                699.95 TL
              </Text>
              <Text
                style={[
                  styles.price,
                  {fontSize: Metrics.deviceWidth / 25, fontWeight: 'bold'},
                ]}>
                599.99 TL
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BasketCard;
