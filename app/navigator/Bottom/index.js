import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {ProductsStack, BlankStack, BasketStack} from '../Stacks';
import React from 'react';
import {Image, LogBox, Text, View} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {useTranslation} from 'react-i18next';
import BasketCount from '../../components/BasketCount';
import Toast from 'react-native-toast-message';
import {toastConfig} from '../../src/configs/toastConfig';

const BottomTab = createMaterialBottomTabNavigator();
export default function Bottom() {
  const {t} = useTranslation();

  LogBox.ignoreAllLogs();
  LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  return (
    <>
      <BottomTab.Navigator
        shifting
        barStyle={styles.barStyle}
        activeColor="#00a680">
        <BottomTab.Screen
          options={{
            tabBarLabel: 'Anasayfa',
            tabBarIcon: ({color, focused}) => {
              return <Icon name="home" size={20} color={color} />;
            },
          }}
          name="Home"
          component={BlankStack}
        />
        <BottomTab.Screen
          options={{
            tabBarLabel: 'Kategoriler',
            tabBarIcon: ({color, focused}) => {
              return <Icon name="search" size={20} color={color} />;
            },
          }}
          name="CategoriesBottom"
          component={ProductsStack}
        />
        <BottomTab.Screen
          options={{
            tabBarLabel: 'Sepetim',
            tabBarIcon: ({color, focused}) => {
              return (
                <>
                  <BasketCount backgroundColor={'#00a680'} />
                  <Icon name="shopping-bag" size={20} color={color} />
                </>
              );
            },
          }}
          name="BasketBottom"
          component={BasketStack}
        />
        <BottomTab.Screen
          options={{
            tabBarLabel: 'Favoriler',
            tabBarIcon: ({color, focused}) => {
              return <Icon name="star" size={20} color={color} />;
            },
          }}
          name="Oyunlar"
          component={BlankStack}
        />
        <BottomTab.Screen
          options={{
            tabBarLabel: 'Hesabım',
            tabBarIcon: ({color, focused}) => {
              return <Icon name="user" size={20} color={color} />;
            },
          }}
          name="AccountBottom"
          component={BlankStack}
        />
      </BottomTab.Navigator>
    </>
  );
}
