import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../util/format';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

import {
  Container,
  ProductList,
  Product,
  Photo,
  Title,
  Price,
  AddToCartButton,
  Amount,
  AmountText,
  AddToCartButtonText,
} from './styles';

export default function Home() {
  const [products, setProducts] = useState([]);
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, [])
  );

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  return (
    <Container>
      <ProductList
        data={products}
        keyExtractor={product => product.id}
        renderItem={({ item }) => (
          <Product>
            <Photo source={{ uri: item.image }} />
            <Title numberOfLines={2}>{item.title}</Title>
            <Price>{item.priceFormatted}</Price>

            <AddToCartButton onPress={() => handleAddProduct(item.id)}>
              <Amount>
                <Icon name="add-shopping-cart" color="#FFF" size={20} />
                <AmountText>{amount[item.id] || 0}</AmountText>
              </Amount>
              <AddToCartButtonText>ADICIONAR</AddToCartButtonText>
            </AddToCartButton>
          </Product>
        )}
      />
    </Container>
  );
}
