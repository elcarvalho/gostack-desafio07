import styled from 'styled-components/native';
import {RectButton, TextInput} from 'react-native-gesture-handler';

export const SafeContainer = styled.SafeAreaView`
  padding: 20px;
  background: #191920;
  flex: 1;
`;

export const Container = styled.View`
  background: #fff;
  border-radius: 4px;
  padding: 10px 15px;
  max-height: 750px;
`;

export const CartItemContainer = styled.View`
  flex: 0;
  margin: 10px 0;
`;

export const CartItemDetails = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const ItemImage = styled.Image`
  width: 80px;
  height: 80px;
  margin-right: 10px;
`;

export const ItemDetails = styled.View`
  flex: 1;
`;

export const RemoveButton = styled(RectButton)`
  height: 100%;
  width: 40px;
  margin-left: 10px;
  justify-content: center;
  align-items: center;
`;

export const CartItemSubtotals = styled.View`
  background: #eee;
  border-radius: 4px;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
`;

export const ItemCount = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const UpdateButton = styled(RectButton)``;

export const ItemQuantity = styled(TextInput)`
  background: #fff;
  border-radius: 4px;
  color: #191920;
  height: 26px;
  width: 50px;
  margin: 0 10px;
  padding: 0;
  text-align: center;
  border: 1px solid #ddd;
`;

export const FormattedPrice = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const FooterContainer = styled.View``;

export const TitleFooter = styled.Text`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: #999;
  margin-top: 10px;
`;

export const ContentFooter = styled.Text`
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const FinishButton = styled(RectButton)`
  justify-content: center;
  align-items: center;
  background: #7150c1;
  height: 42px;
  border-radius: 4px;
`;

export const TextButton = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const EmptyCart = styled.View`
  justify-content: center;
  align-items: center;
  padding: 40px;
`;

export const TextEmpty = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-top: 15px;
`;
