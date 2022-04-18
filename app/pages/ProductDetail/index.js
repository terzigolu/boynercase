import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './styles';
import ImageSliderv2 from '../../components/ImageSliderv2';
import globalStyles from '../../src/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/Header';
import BuyCard from '../../components/BuyCard';

const ProductDetail = props => {
  const {navigation, route} = props;
  const {item = null} = route?.params;
  const [favorite, setFavorite] = useState(false);
  return (
    <View style={styles.safe}>
      <ScrollView style={{width: '100%', height: '100%', marginBottom: 60}}>
        <Header navigation={navigation} />
        <ImageSliderv2 images={item.PictureCarousel} />
        <View style={styles.container}>
          <View style={globalStyles.columns}>
            <View style={globalStyles.rows}>
              <Text style={styles.name}>{item?.ProductBrand}</Text>
              <Text style={styles.title}>{item?.ModelName}</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                setFavorite(!favorite);
              }}
              activeOpacity={0.9}
              style={[
                styles.rows,
                {flex: 0.1, justifyContent: 'center', alignItems: 'center'},
              ]}>
              <Icon
                name={favorite ? 'heart' : 'heart-o'}
                size={20}
                color={'red'}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <BuyCard item={item} />
    </View>
  );
};

export default ProductDetail;
