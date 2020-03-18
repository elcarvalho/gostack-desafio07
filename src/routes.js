import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Header from './components/header';
import Main from './pages/Main';
import Cart from './pages/Cart';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{
          headerTitle: '',
          header: () => <Header />,
        }}
      />
      <Stack.Screen name="Cart" component={Cart} options={{title: 'Cart'}} />
    </Stack.Navigator>
  );
};

export default Routes;
