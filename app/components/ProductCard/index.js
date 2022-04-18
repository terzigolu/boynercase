import React, {useState, useEffect} from 'react';
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
  ImageBackground,
} from 'react-native';
import styles from './styles';
import globalStyles from '../../src/styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProductCard = props => {
  const {item, index, navigation} = props;
  const [favorited, setFavorited] = useState(false);

  const colorChoiches = () => {
    // renk sayısı datasını response içinde bulamadığım için statik bastım
    return (
      <View style={styles.color_container}>
        <Text style={styles.color_title}>9 Renk</Text>
      </View>
    );
  };

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ProductDetail', {item: item});
      }}
      activeOpacity={0.9}
      style={styles.container}>
      <ImageBackground source={{uri: item.PictureUrl}} style={styles.image}>
        {item.HasColour && colorChoiches()}
      </ImageBackground>

      <View style={[globalStyles.columns, {marginTop: 10}]}>
        <View style={styles.title_section}>
          <Text style={styles.title} numberOfLines={2}>
            {item.ProductBrand}
          </Text>
          <Text style={styles.desc} numberOfLines={1}>
            {item.ModelName}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            setFavorited(!favorited);
          }}
          style={styles.favorite_section}>
          <Icon
            name={favorited ? 'heart' : 'heart-o'}
            size={20}
            color={favorited ? 'red' : 'black'}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
