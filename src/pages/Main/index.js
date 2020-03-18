import React from 'react';
import {Text, View} from 'react-native';
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
  TextButton,
} from './styles';

const data = {
  products: [
    {
      id: 1,
      title: 'Tênis de Caminhada Leve e muito Confortável Confortável',
      price: 'R$ 179,90',
      image:
        'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis1.jpg',
    },
    {
      id: 2,
      title: 'Tênis VR Caminhada Confortável Detalhes Couro Masculino',
      price: 'R$ 139.90',
      image:
        'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/modulo-redux/tenis2.jpg',
    },
  ],
};

export default function Main({navigation}) {
  return (
    <SafeContainer>
      <FlatList
        data={data.products}
        keyExtractor={item => String(item.id)}
        horizontal={true}
        renderItem={({item}) => (
          <ProductContainer>
            <ProductImage source={{uri: item.image}} />
            <ProductTitle>{item.title}</ProductTitle>
            <ProductPrice>{item.price}</ProductPrice>
            <ButtonContainer>
              <BasketContainer>
                <Icon name="shopping-basket" size={24} color="#fff" />
                <BasketText>1</BasketText>
              </BasketContainer>
              <TextButton>ADICIONAR</TextButton>
            </ButtonContainer>
          </ProductContainer>
        )}
      />
    </SafeContainer>
  );
}
