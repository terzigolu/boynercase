import Navigator from './app/navigator';
import React, {useEffect} from 'react';
import {Modal, Platform, SafeAreaView, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import './app/constants/IMLocalize';
import configureStore from './app/store/configureStore';
import {Provider} from 'react-redux';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';
import {toastConfig} from './app/src/configs/toastConfig';
import {Button} from 'react-native-elements';
import {Metrics} from './app/src/dimensions/Metrics';

const App = () => {
  const store = configureStore();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>
  );
};
export default App;
