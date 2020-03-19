import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Text, Alert} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

import {formatPrice} from '../../util/format';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  SafeContainer,
  Container,
  CartItemContainer,
  CartItemDetails,
  ItemImage,
  ItemDetails,
  RemoveButton,
  CartItemSubtotals,
  ItemCount,
  UpdateButton,
  ItemQuantity,
  FormattedPrice,
  FooterContainer,
  TitleFooter,
  ContentFooter,
  FinishButton,
  TextButton,
  EmptyCart,
  TextEmpty,
} from './styles';

import {
  updateCartRequest,
  removeFromCart,
} from '../../store/modules/cart/actions';

export default function Cart({navigation}) {
  const [productList, setProductList] = useState([]);
  const [total, setTotal] = useState(0);
  const [cartEmpty, setCartEmpty] = useState(true);
  const products = useSelector(state => state.cart.products);

  useEffect(() => {
    const _products = products.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
      subtotal: formatPrice(product.amount * product.price),
    }));

    const _total = products.reduce(
      (total, product) => total + product.amount * product.price,
      0
    );

    setProductList(_products);
    setTotal(formatPrice(_total));
    setCartEmpty(products.length > 0);
  }, [products]);

  const dispatch = useDispatch();

  const handleIncrement = product =>
    dispatch(updateCartRequest(product.id, product.amount + 1));

  const handleDecrement = product =>
    dispatch(updateCartRequest(product.id, product.amount - 1));

  const handleFinishCart = () =>
    Alert.alert('Finalizar compra', 'Deseja ir para o pagamento?', [
      {
        text: 'Continuar comprando',
        onPress: () => navigation.navigate('Main'),
      },
      {
        text: 'Pagamento',
        onPress: () => console.log('checkout'),
      },
    ]);

  const emptyCart = () => (
    <EmptyCart>
      <Icon name="remove-shopping-cart" size={40} color="#ddd" />
      <TextEmpty>Carrinho vazio</TextEmpty>
    </EmptyCart>
  );

  return (
    <SafeContainer>
      <Container>
        <FlatList
          ListEmptyComponent={emptyCart}
          data={productList}
          keyExtractor={product => String(product.id)}
          renderItem={({item: product}) => (
            <CartItemContainer>
              <CartItemDetails>
                <ItemImage source={{uri: product.image}} />
                <ItemDetails>
                  <Text>{product.title}</Text>
                  <FormattedPrice>{product.priceFormatted}</FormattedPrice>
                </ItemDetails>
                <RemoveButton
                  onPress={() => dispatch(removeFromCart(product.id))}>
                  <Icon name="delete-forever" size={20} color="#7159c1" />
                </RemoveButton>
              </CartItemDetails>
              <CartItemSubtotals>
                <ItemCount>
                  <UpdateButton onPress={() => handleDecrement(product)}>
                    <Icon
                      name="remove-circle-outline"
                      size={20}
                      color="#7159c1"
                    />
                  </UpdateButton>
                  <ItemQuantity
                    value={String(product.amount)}
                    editable={false}
                  />
                  <UpdateButton onPress={() => handleIncrement(product)}>
                    <Icon name="add-circle-outline" size={20} color="#7159c1" />
                  </UpdateButton>
                </ItemCount>
                <FormattedPrice>{product.subtotal}</FormattedPrice>
              </CartItemSubtotals>
            </CartItemContainer>
          )}
        />

        {cartEmpty && (
          <FooterContainer>
            <TitleFooter>TOTAL</TitleFooter>
            <ContentFooter>{total}</ContentFooter>
            <FinishButton onPress={handleFinishCart}>
              <TextButton>FINALIZAR PEDIDO</TextButton>
            </FinishButton>
          </FooterContainer>
        )}
      </Container>
    </SafeContainer>
  );
}
