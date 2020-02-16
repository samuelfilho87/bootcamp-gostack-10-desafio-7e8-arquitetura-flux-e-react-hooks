import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  padding: 20px;
  background: #141419;
  flex: 1;
`;

export const CartProductList = styled.FlatList.attrs({
  showVerticalScrollIndicator: false,
})`
  margin-top: 20px;
`;

export const Product = styled.View`
  margin-bottom: 15px;
  padding: 15px;
  background: #fff;
  border-radius: 4px;
  align-items: center;
`;

export const Header = styled.View`
  flex-direction: row;
  margin-bottom: 20px;
  align-items: center;
`;

export const InfoProduct = styled.View`
  justify-content: space-between;
  flex: 1;
`;

export const Photo = styled.Image`
  width: 80px;
  height: 80px;
  margin-right: 10px;
  border-radius: 32px;
  background: #e2e2e2;
`;

export const Title = styled.Text`
  font-size: 15px;
  line-height: 18px;
  color: #333;
  margin-top: 5px;
`;

export const Price = styled.Text`
  padding: 10px 0;
  width: 100%;
  font-weight: bold;
  font-size: 21px;
  line-height: 19px;
`;

export const Footer = styled.View`
  width: 100%;
  max-height: 40px;
  padding: 10px;
  flex-direction: row;
  justify-content: space-between;
  background: #eee;
`;

export const BoxAmount = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Amount = styled.TextInput.attrs({
  readonly: true,
})`
  width: 50px;
  height: 26px;
  margin: 0 5px;
  padding: 5px;
  text-align: center;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #ddd;
`;

export const Subtotal = styled.Text`
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  color: #000;
`;

export const BoxCheckOut = styled.View`
  align-self: auto;
  background: #fff;
  padding: 15px;
  border-radius: 4px;
`;

export const TextTotal = styled.Text`
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #999999;
`;

export const Total = styled.Text`
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 30px;
  line-height: 35px;
  text-align: center;
  letter-spacing: -1.6px;
  color: #000000;
`;

export const CheckOutButton = styled(RectButton)`
  width: 100%;
  height: 42px;
  margin: auto;
  background: #7159c1;
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const CheckOutButtonText = styled.Text`
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #ffffff;
`;

export const BoxEmptyCart = styled.View`
  margin-top: 30px;
  padding: 20px;
  align-items: center;
  border-radius: 4px;
  background: #fff;
`;

export const TextEmptyCart = styled.Text`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #000;
`;
