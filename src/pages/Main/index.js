import React from 'react';
import {View, Text} from 'react-native';
import {RectButton} from 'react-native-gesture-handler';

// import { Container } from './styles';

export default function Main({navigation}) {
  return (
    <View>
      <Text>Página inicial</Text>
      <RectButton onPress={() => navigation.navigate('Cart')}>
        <Text>Cart</Text>
      </RectButton>
    </View>
  );
}
