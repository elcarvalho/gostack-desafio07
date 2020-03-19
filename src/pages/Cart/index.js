import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Text} from 'react-native';
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
} from './styles';

import {updateCartRequest} from '../../store/modules/cart/actions';

export default function Cart() {
  const [productList, setProductList] = useState([]);
  const [total, setTotal] = useState(0);
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
  }, [products]);

  const dispatch = useDispatch();

  const handleAddItem = product =>
    dispatch(updateCartRequest(product.id, product.amount + 1));

  const handleRemoveItem = product =>
    dispatch(updateCartRequest(product.id, product.amount - 1));

  return (
    <SafeContainer>
      <Container>
        <FlatList
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
              </CartItemDetails>
              <CartItemSubtotals>
                <ItemCount>
                  <UpdateButton onPress={() => handleRemoveItem(product)}>
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
                  <UpdateButton onPress={() => handleAddItem(product)}>
                    <Icon name="add-circle-outline" size={20} color="#7159c1" />
                  </UpdateButton>
                </ItemCount>
                <FormattedPrice>{product.subtotal}</FormattedPrice>
              </CartItemSubtotals>
            </CartItemContainer>
          )}
        />

        <FooterContainer>
          <TitleFooter>TOTAL</TitleFooter>
          <ContentFooter>{total}</ContentFooter>
          <FinishButton>
            <TextButton>FINALIZAR PEDIDO</TextButton>
          </FinishButton>
        </FooterContainer>
      </Container>
    </SafeContainer>
  );
}
