import React, {useState, useEffect} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import styles from './styles';
import {Button} from 'react-native-elements';
import globalStyles from '../../src/styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Divider from '../Divider';
import PropTypes from 'prop-types';

const FilterButtons = props => {
  const {openSheet} = props;
  return (
    <View style={styles.container}>
      <View style={styles.columns}>
        <View style={styles.rows}>
          <Button
            icon={
              <Icon
                style={{marginRight: 10}}
                name={'sort-amount-down'}
                size={15}
                color={'black'}
              />
            }
            titleStyle={[globalStyles.button_title_style, {fontWeight: 'bold'}]}
            containerStyle={globalStyles.button_container_style}
            buttonStyle={globalStyles.button_style}
            title={'SIRALA'}
          />
        </View>
        <View style={[styles.rows, {flex: 0.01}]}>
          <Divider vertical={true} dividerColor={'lightgrey'} />
        </View>
        <View style={styles.rows}>
          <Button
            onPress={openSheet}
            icon={
              <Icon
                style={{marginRight: 10}}
                name={'filter'}
                size={15}
                color={'black'}
              />
            }
            titleStyle={[globalStyles.button_title_style, {fontWeight: 'bold'}]}
            containerStyle={globalStyles.button_container_style}
            buttonStyle={globalStyles.button_style}
            title={'FİLTRELE'}
          />
        </View>
      </View>
    </View>
  );
};

FilterButtons.propTypes = {
  openSheet: PropTypes.func.isRequired,
};

export default FilterButtons;
