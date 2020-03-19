import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  SafeContainer,
  Container,
  Logo,
  BasketContainer,
  ItemCount,
} from './styles';

export default function header({navigate}) {
  return (
    <SafeContainer>
      <Container>
        <Logo />
        <BasketContainer onPress={() => navigate('Cart')}>
          <Icon name="shopping-basket" size={24} color="#fff" />
          <ItemCount>3</ItemCount>
        </BasketContainer>
      </Container>
    </SafeContainer>
  );
}
