import styled from 'styled-components/native';
import {darken} from 'polished';
import {RectButton} from 'react-native-gesture-handler';

export const SafeContainer = styled.SafeAreaView`
  padding: 20px;
  background: #191929;
  flex: 1;
`;

export const ProductContainer = styled.View`
  padding: 10px;
  background: #fff;
  border-radius: 4px;
  align-items: center;
  width: 220px;
  height: 358px;
  margin-right: 15px;
`;

export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
  margin-bottom: 5px;
`;

export const ProductPrice = styled.Text`
  font-size: 21px;
  font-weight: bold;
  text-align: left;
  width: 100%;
  margin-bottom: 5px;
  margin-top: auto;
`;

export const ButtonContainer = styled.View`
  background: #7150c1;
  flex-direction: row;
  align-items: center;
  width: 100%;
  border-radius: 4px;
`;

export const BasketContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${darken(0.03, '#7159c1')};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  width: 53px;
  padding: 8px;
`;

export const BasketText = styled.Text`
  color: #fff;
`;

export const AddButton = styled(RectButton)`
  flex: 1;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`;
