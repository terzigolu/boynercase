import {createStackNavigator, createAppContainer} from 'react-navigation';
import React from 'react';
import {createSwitchNavigator} from '@react-navigation/compat';

import {LoginStack, AppStack, switchNavigator} from './Stacks';

const Navigator = createSwitchNavigator(switchNavigator, {
  initialRouteName: 'App',
});

export default Navigator;
