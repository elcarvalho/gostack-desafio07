import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  SafeContainer,
  Container,
  Logo,
  BasketContainer,
  ItemCount,
} from './styles';

export default function header({navigate}) {
  const [cartSize, setCartSize] = useState(0);
  const products = useSelector(state => state.cart.products);

  useEffect(() => {
    const _cartSize = products.reduce(
      (size, product) => size + product.amount,
      0
    );

    setCartSize(_cartSize);
  }, [products]);

  return (
    <SafeContainer>
      <Container>
        <Logo />
        <BasketContainer onPress={() => navigate('Cart')}>
          <Icon name="shopping-basket" size={24} color="#fff" />
          <ItemCount>{cartSize}</ItemCount>
        </BasketContainer>
      </Container>
    </SafeContainer>
  );
}
