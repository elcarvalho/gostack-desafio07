import 'react-native-gesture-handler';

import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';

import store from './store';
import Routes from './routes';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="#141419" />
      <Provider store={store}>
        <Routes />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
