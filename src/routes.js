import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import Main from './pages/Main';
import Cart from './pages/Cart';

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#7159c1',
        },
        headerTintColor: '#fff',
      }}>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{title: 'Rocketshoes'}}
      />
      <Stack.Screen name="Cart" component={Cart} options={{title: 'Cart'}} />
    </Stack.Navigator>
  );
};

export default Routes;
