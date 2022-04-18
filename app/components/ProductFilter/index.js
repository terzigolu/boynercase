import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {Button} from 'react-native-elements';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useDispatch, useSelector} from 'react-redux';
import {
  GET_FILTER,
  selectError,
  selectFilters,
  selectLoading,
} from '../../store/filters';
import Divider from '../Divider';
import PropTypes from 'prop-types';

const ProductFilter = props => {
  const {closeSheet} = props;
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const [index, setIndex] = useState(0);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    dispatch(GET_FILTER());
  }, []);

  const renderItem = (item, index) => {
    console.log(item);
    return (
      <>
        <TouchableOpacity
          onPress={() => {
            setSelectedItem(item);
            setIndex(1);
          }}
          style={styles.item_container}>
          <View style={styles.columns}>
            <View style={[styles.rows, {alignItems: 'flex-start'}]}>
              <Text style={styles.item_title}>{item.Name}</Text>
            </View>
            <View style={[styles.rows, {alignItems: 'flex-end'}]}>
              <Icon
                style={{right: 10}}
                name={'angle-right'}
                size={30}
                color={'#000'}
              />
            </View>
          </View>
        </TouchableOpacity>
        <Divider
          horizontalStyle={{width: '100%', marginTop: 0}}
          dividerColor={'lightgrey'}
          horizontal
        />
      </>
    );
  };
  const renderDetails = (item, index) => {
    console.log(item);
    return (
      <>
        <TouchableOpacity
          onPress={() => {
            setSelectedItem(null);
            setIndex(0);
          }}
          style={styles.item_container}>
          <View style={styles.columns}>
            <View style={[styles.rows, {alignItems: 'flex-start'}]}>
              <Text style={styles.item_title}>{item.item.Name}</Text>
            </View>
            <View style={[styles.rows, {alignItems: 'flex-end'}]} />
          </View>
        </TouchableOpacity>
        <Divider
          horizontalStyle={{width: '100%', marginTop: 0}}
          dividerColor={'lightgrey'}
          horizontal
        />
      </>
    );
  };

  if (loading) {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
        }}>
        <ActivityIndicator size={'large'} color={'black'} />
      </View>
    );
  }

  if (filters && index === 0) {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          <View style={styles.columns}>
            <TouchableOpacity
              onPress={() => {
                closeSheet();
              }}
              style={[styles.rows, {alignItems: 'flex-start'}]}>
              <Icon name={'close'} size={25} color={'#000'} />
            </TouchableOpacity>
            <View style={styles.rows}>
              <Text style={styles.title}>Filtrele</Text>
            </View>
            <View style={styles.rows} />
          </View>
        </View>
        {filters.length !== 0 && (
          <ScrollView style={{width: '100%', height: '85%'}}>
            {loading === false &&
              Object.keys(filters?.Context?.FilterModules).map((v, i) => {
                return renderItem(filters?.Context?.FilterModules[v], i);
              })}
          </ScrollView>
        )}
        <TouchableOpacity
          onPress={() => {
            closeSheet();
          }}
          style={styles.apply_button}>
          <View
            style={[styles.apply_button_inside, {backgroundColor: '#00a680'}]}>
            <Text style={[styles.apply_button_title, {color: 'white'}]}>
              Filtrele
            </Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
  if (index === 1 && selectedItem !== null) {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          <View style={styles.columns}>
            <TouchableOpacity
              onPress={() => {
                setIndex(0);
                setSelectedItem(null);
              }}
              style={[styles.rows, {alignItems: 'flex-start'}]}>
              <Icon name={'chevron-left'} size={25} color={'#000'} />
            </TouchableOpacity>
            <View style={styles.rows}>
              <Text style={styles.title}>{selectedItem.Name}</Text>
            </View>
            <View style={styles.rows} />
          </View>
        </View>
        <FlatList
          style={{width: '100%', height: '85%'}}
          keyExtractor={(item, index) => index.toString()}
          data={selectedItem && selectedItem.FilterModuleItems}
          renderItem={renderDetails}
        />
        <TouchableOpacity
          onPress={() => {
            setSelectedItem(null);
            setIndex(0);
          }}
          style={styles.apply_button}>
          <View style={styles.apply_button_inside}>
            <Text style={styles.apply_button_title}>Uygula</Text>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    );
  } else {
    return <View />;
  }
};

ProductFilter.propTypes = {
  closeSheet: PropTypes.func.isRequired,
};

export default ProductFilter;
