import React, {useState, useEffect, useRef} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Animated,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import {Metrics} from '../../src/dimensions/Metrics';
import Dots from 'react-native-dots-pagination';

const ImageSliderv2 = props => {
  const {images, onPress} = props;
  const width = Metrics.deviceWidth;
  const [height, setHeight] = useState(Metrics.deviceHeight / 1.7);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollEnabled = images.length > 1 ? true : false;

  const change = ({nativeEvent}) => {
    const {contentOffset} = nativeEvent;
    const index = Math.round(contentOffset.x / width);
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inside_container}>
        <ScrollView
          onScroll={change}
          scrollEnabled={scrollEnabled}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          style={{
            width: width,
            alignSelf: 'center',
          }}
          pagingEnabled
          horizontal={true}>
          {images?.length > 0 &&
            images.map((v, i) => {
              return (
                <TouchableWithoutFeedback onPress={onPress}>
                  <Image
                    source={{
                      uri: v,
                    }}
                    style={styles.image}
                  />
                </TouchableWithoutFeedback>
              );
            })}
        </ScrollView>
        {Array.isArray(images) && images?.length > 1 && (
          <View style={{marginTop: -40}}>
            <Dots
              activeDotWidth={12}
              activeDotHeight={12}
              passiveDotWidth={9}
              passiveDotHeight={9}
              passiveColor={'white'}
              activeBorderWidth={1.2}
              activeBorderColor={'white'}
              activeBorder={1}
              activeColor={'black'}
              length={images.length ?? 0}
              active={activeIndex}
            />
          </View>
        )}
      </View>
    </View>
  );
};

ImageSliderv2.propTypes = {
  images: PropTypes.array,
  onPress: PropTypes.func,
};

export default ImageSliderv2;
