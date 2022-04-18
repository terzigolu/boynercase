import React from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';

const Divider = props => {
  const {
    vertical,
    horizontal,
    dividerColor = 'black',
    horizontalStyle,
    verticalStyle,
  } = props;

  return (
    <>
      {vertical && (
        <View style={styles.container}>
          <View
            style={[
              verticalStyle,
              styles.vertical,
              {backgroundColor: dividerColor},
            ]}
          />
        </View>
      )}
      {horizontal && (
        <View style={styles.container}>
          <View
            style={[
              horizontalStyle,
              styles.horizontal,
              {backgroundColor: dividerColor},
            ]}
          />
        </View>
      )}
    </>
  );
};

Divider.propTypes = {
  vertical: PropTypes.bool,
  horizontal: PropTypes.bool,
  dividerColor: PropTypes.any,
  horizontalStyle: PropTypes.any,
  verticalStyle: PropTypes.any,
};

export default Divider;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontal: {
    width: '90%',
    height: 1,
    backgroundColor: 'black',
  },
  vertical: {
    width: 1,
    height: '70%',
    backgroundColor: 'black',
  },
});
