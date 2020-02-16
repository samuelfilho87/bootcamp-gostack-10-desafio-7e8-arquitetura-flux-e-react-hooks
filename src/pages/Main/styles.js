import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  padding: 20px 0;
  background: #141419;
  flex: 1;
`;

export const ProductList = styled.FlatList.attrs({
  horizontal: true,
})``;

export const Product = styled.View`
  width: 220px;
  max-height: 358px;
  padding: 10px;
  align-items: center;
  margin: 0 20px 30px;
  background: #fff;
  border-radius: 4px;
`;

export const Photo = styled.Image`
  width: 200px;
  height: 200px;
  border-radius: 32px;
  background: #e2e2e2;
`;

export const Title = styled.Text`
  font-size: 15px;
  line-height: 21px;
  color: #333;
  margin-top: 5px;
`;

export const Price = styled.Text`
  padding: 10px 0;
  width: 100%;
  font-weight: bold;
  font-size: 21px;
  line-height: 25px;
`;

export const AddToCartButton = styled(RectButton)`
  width: 100%;
  height: 42px;
  margin: auto;
  background: #7159c1;
  border-radius: 4px;
  opacity: ${props => (props.loading ? 0.7 : 1)};
  flex-direction: row;
  align-items: center;
  margin-bottom: 0px;
`;

export const Amount = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px 13px;
  background: rgba(0, 0, 0, 0.2);
`;

export const AmountText = styled.Text`
  padding-left: 13px;
  font-size: 14px;
  line-height: 16px;
  color: #fff;
`;

export const AddToCartButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #fff;
`;
