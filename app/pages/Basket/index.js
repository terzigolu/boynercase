import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import styles from './styles';
import {useSelector} from 'react-redux';
import {selectBasket} from '../../store/basket';
import BasketCard from '../../components/BasketCard';
import Toast from 'react-native-toast-message';
import {toastConfig} from '../../src/configs/toastConfig';

const Basket = props => {
  const {navigation} = props;
  const basket = useSelector(selectBasket);

  const renderItem = ({item, index}) => {
    return <BasketCard navigation={navigation} item={item} index={index} />;
  };
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.main}>
        <View style={styles.basket_title_container}>
          <Text style={styles.basket_title}>
            Sepetim ({basket.length} ürün)
          </Text>
        </View>
        <FlatList
          keyExtractor={item => item.ListingId.toString()}
          data={basket && basket}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

export default Basket;
