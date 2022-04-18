import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import pages from '../../pages';
import Bottom from '../Bottom';
import Categories from '../../pages/Categories';
import ProductDetail from '../../pages/ProductDetail';
import Basket from '../../pages/Basket';
import Toast from 'react-native-toast-message';
import {toastConfig} from '../../src/configs/toastConfig';

const SplashStacks = createStackNavigator();
const LoginStacks = createStackNavigator();
const ProductStack = createStackNavigator();
const BasketStacks = createStackNavigator();

const BlankStacks = createStackNavigator();
const {Splash, Blank} = pages;
export function SplashStack() {
  return (
    <SplashStacks.Navigator>
      <SplashStacks.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
    </SplashStacks.Navigator>
  );
}

export function LoginStack() {
  return (
    <LoginStacks.Navigator>
      <LoginStacks.Screen
        name="Login"
        component={Blank}
        options={{headerShown: false}}
      />
    </LoginStacks.Navigator>
  );
}

export function ProductsStack() {
  return (
    <ProductStack.Navigator>
      <ProductStack.Screen
        name="Products"
        component={Categories}
        options={{headerShown: false}}
      />
      <ProductStack.Screen
        name="ProductDetail"
        component={ProductDetail}
        options={{headerShown: false}}
      />
    </ProductStack.Navigator>
  );
}

export function BlankStack() {
  return (
    <BlankStacks.Navigator>
      <BlankStacks.Screen
        name="Blank"
        component={Blank}
        options={{headerShown: false}}
      />
    </BlankStacks.Navigator>
  );
}
export function BasketStack() {
  return (
    <BasketStacks.Navigator>
      <BasketStacks.Screen
        name="Basket"
        component={Basket}
        options={{headerShown: false}}
      />
    </BasketStacks.Navigator>
  );
}

export const switchNavigator = {
  Splash: SplashStack,
  Login: LoginStack,
  App: Bottom,
};
