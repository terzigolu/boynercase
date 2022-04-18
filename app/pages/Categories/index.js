import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  Button,
} from 'react-native';
import styles from './styles';
import FilterButtons from '../../components/FilterButtons';
import Divider from '../../components/Divider';
import ProductCard from '../../components/ProductCard';
import {useDispatch, useSelector} from 'react-redux';
import {apiCallBegan} from '../../store/middleware/api';
import {
  GET_PRODUCTS,
  selectError,
  selectLoading,
  selectProducts,
} from '../../store/products';
import globalStyles from '../../src/styles';
import BottomSheet from 'react-native-gesture-bottom-sheet';
import {Metrics} from '../../src/dimensions/Metrics';
import ProductFilter from '../../components/ProductFilter';

const Categories = props => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const products = useSelector(selectProducts);
  const error = useSelector(selectError);
  const bottomSheet = useRef();

  useEffect(() => {
    dispatch(GET_PRODUCTS());
  }, []);

  const renderItem = ({item, index}) => {
    return <ProductCard navigation={navigation} item={item} index={index} />;
  };

  const renderFilterSheet = () => {
    return (
      <BottomSheet
        draggable={false}
        hasDraggableIcon={false}
        ref={bottomSheet}
        height={Metrics.deviceHeight - 50}>
        <ProductFilter
          closeSheet={() => {
            bottomSheet.current.close();
          }}
        />
      </BottomSheet>
    );
  };

  const renderFilterButtons = () => {
    return (
      <FilterButtons
        openSheet={() => {
          bottomSheet.current.show();
        }}
      />
    );
  };

  const renderProducts = () => {
    return (
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={() => dispatch(GET_PRODUCTS())}
          />
        }
        numColumns={2}
        keyExtractor={(item, index) => item.ListingId.toString()}
        style={styles.flatList}
        data={products && products.ProductList}
        renderItem={renderItem}
      />
    );
  };

  if (products) {
    return (
      <SafeAreaView style={styles.safe}>
        {renderFilterSheet()}
        {renderFilterButtons()}
        <Divider dividerColor={'lightgrey'} horizontal />
        {renderProducts()}
      </SafeAreaView>
    );
  }
  if (error) {
    return (
      <SafeAreaView
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Bir sorun oluştu.</Text>
        <Button
          onPress={() => {
            dispatch(GET_PRODUCTS());
          }}
          title={'Tekrar dene'}
        />
      </SafeAreaView>
    );
  } else {
    return (
      <View style={globalStyles.flex_centered_container}>
        <ActivityIndicator size={'large'} color={'black'} />
      </View>
    );
  }
};

export default Categories;
