import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  CartProductList,
  Product,
  Header,
  InfoProduct,
  Photo,
  Title,
  Price,
  Footer,
  BoxAmount,
  Amount,
  Subtotal,
  BoxCheckOut,
  TextTotal,
  Total,
  CheckOutButton,
  CheckOutButtonText,
  BoxEmptyCart,
  TextEmptyCart,
} from './styles';

export default function Cart() {
  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <Container>
      {cart.length ? (
        <>
          <CartProductList
            data={cart}
            keyExtractor={product => product.id}
            renderItem={({ item }) => (
              <Product>
                <Header>
                  <Photo source={{ uri: item.image }} />
                  <InfoProduct>
                    <Title numberOfLines={2}>{item.title}</Title>
                    <Price>{item.priceFormatted}</Price>
                  </InfoProduct>
                  <Icon
                    name="delete-forever"
                    color="#7159c1"
                    size={26}
                    onPress={() =>
                      dispatch(CartActions.removeFromCart(item.id))
                    }
                  />
                </Header>
                <Footer>
                  <BoxAmount>
                    <Icon
                      name="remove-circle"
                      color="#141419"
                      size={24}
                      onPress={() => decrement(item)}
                    />
                    <Amount value={String(item.amount)} />
                    <Icon
                      name="add-circle"
                      color="#141419"
                      size={24}
                      onPress={() => increment(item)}
                    />
                  </BoxAmount>

                  <Subtotal>{item.subtotal}</Subtotal>
                </Footer>
              </Product>
            )}
          />

          <BoxCheckOut>
            <TextTotal>TOTAL</TextTotal>
            <Total>{total}</Total>
            <CheckOutButton>
              <CheckOutButtonText>FINALIZAR PEDIDO</CheckOutButtonText>
            </CheckOutButton>
          </BoxCheckOut>
        </>
      ) : (
        <BoxEmptyCart>
          <Icon name="remove-shopping-cart" size={64} color="#ccc" />
          <TextEmptyCart>Seu carrinho está vazio.</TextEmptyCart>
        </BoxEmptyCart>
      )}
    </Container>
  );
}
