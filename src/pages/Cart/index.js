import React from 'react';
import {Text} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

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

export default function Cart() {
  const data = {
    products: [
      {
        id: 1,
        title: 'Tênis de Caminhada Leve e muito Confortável Confortável',
        price: 'R$ 179,90',
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
        amount: 2,
        formattedPrice: 'R$ 179,90',
        subtotal: 'R$ 359,80',
      },
      {
        id: 2,
        title: 'Tênis de Caminhada Leve e muito Confortável Confortável',
        price: 'R$ 179,90',
        image:
          'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
        amount: 2,
        formattedPrice: 'R$ 179,90',
        subtotal: 'R$ 359,80',
      },
    ],
  };

  return (
    <SafeContainer>
      <Container>
        <FlatList
          data={data.products}
          keyExtractor={product => String(product.id)}
          renderItem={({item: product}) => (
            <CartItemContainer>
              <CartItemDetails>
                <ItemImage source={{uri: product.image}} />
                <ItemDetails>
                  <Text>{product.title}</Text>
                  <FormattedPrice>{product.formattedPrice}</FormattedPrice>
                </ItemDetails>
              </CartItemDetails>
              <CartItemSubtotals>
                <ItemCount>
                  <UpdateButton>
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
                  <UpdateButton>
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
          <ContentFooter>R$ 1000,00</ContentFooter>
          <FinishButton>
            <TextButton>FINALIZAR PEDIDO</TextButton>
          </FinishButton>
        </FooterContainer>
      </Container>
    </SafeContainer>
  );
}
