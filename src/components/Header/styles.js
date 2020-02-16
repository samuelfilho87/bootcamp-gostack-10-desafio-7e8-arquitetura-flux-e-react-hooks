import styled from 'styled-components/native';

import logo from '../../assets/images/logo.png';

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  padding: 20px 20px 40px 20px;
  background: #141419;
`;

export const LogoContainer = styled.TouchableOpacity`
  width: 184px;
  height: 24px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
})`
  width: 184px;
  height: 24px;
  padding-bottom: 20px;
  margin-bottom: 20px;
`;

export const CartContainer = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ItemCount = styled.Text`
  position: absolute;
  text-align: center;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  color: #fff;
  font-size: 12px;
  padding: 2px;
  border-radius: 9px;
  overflow: hidden;
`;
