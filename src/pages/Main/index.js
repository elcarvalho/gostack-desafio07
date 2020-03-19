import React, {useEffect, useState, useMemo} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import api from '../../services/api';
import {formatPrice} from '../../util/format';

import {addToCartRequest} from '../../store/modules/cart/actions';

import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  SafeContainer,
  ProductContainer,
  ProductImage,
  ProductTitle,
  ProductPrice,
  ButtonContainer,
  BasketContainer,
  BasketText,
  AddButton,
  TextButton,
} from './styles';

export default function Main() {
  const [products, setProducts] = useState([]);
  const cartProducts = useSelector(state => state.cart.products);

  const dispatch = useDispatch();

  const amount = useMemo(
    () =>
      cartProducts.reduce((amount, product) => {
        amount[product.id] = product.amount;

        return amount;
      }, {}),
    [cartProducts]
  );

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await api.get('/products');
        const products = response.data.map(product => ({
          ...product,
          priceFormatted: formatPrice(product.price),
        }));
        setProducts(products);
      } catch (error) {
        console.log(error);
      }
    }

    getProducts();
  }, []);

  return (
    <SafeContainer>
      <FlatList
        data={products}
        keyExtractor={item => String(item.id)}
        horizontal={true}
        renderItem={({item: product}) => (
          <ProductContainer>
            <ProductImage source={{uri: product.image}} />
            <ProductTitle>{product.title}</ProductTitle>
            <ProductPrice>{product.priceFormatted}</ProductPrice>
            <ButtonContainer>
              <BasketContainer>
                <Icon name="add-shopping-cart" size={24} color="#fff" />
                <BasketText>{amount[product.id] || 0}</BasketText>
              </BasketContainer>
              <AddButton onPress={() => dispatch(addToCartRequest(product.id))}>
                <TextButton>ADICIONAR</TextButton>
              </AddButton>
            </ButtonContainer>
          </ProductContainer>
        )}
      />
    </SafeContainer>
  );
}
