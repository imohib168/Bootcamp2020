import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

// Components From Material UI
import { Drawer, LinearProgress, Grid, Badge } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

// Custom Component
import Items from './Components/Items/Items';
import Cart from './Components/Cart/Cart';

// Styles
import { Wrapper, StyledButton } from './App.elements';

// Types
import { ProductType } from './Types';

// Fetching Data from Store
const getProducts = async (): Promise<ProductType[]> => {
  const data = await (await fetch('https://fakestoreapi.com/products')).json();
  return data;
}


const App = () => {

  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<ProductType[]>([]);

  const { data, isLoading, error } = useQuery<ProductType[]>('products', getProducts);

  const getTotalItem = (items: ProductType[]) =>
    items.reduce((acc: number, item) => acc += item.amount, 0);

  const handleAddToCart = (clickedItem: ProductType) => {
    setCartItems(prev => {
      const isItemInCart = prev.find(item => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map(item =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }

      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems(prev => (
      prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acc;
          return [...acc, { ...item, amount: item.amount - 1 }]
        } else {
          return [...acc, item]
        }
      }, [] as ProductType[])
    ))
  };

  if (isLoading) return <LinearProgress />
  if (error) return <div>Something went wrong ...</div>

  return (
    <Wrapper>
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart cartItems={cartItems} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart} />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItem(cartItems)} color='error'>
          <ShoppingCartIcon />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Items
              item={item}
              handleAddToCart={handleAddToCart}
            />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  )
}

export default App
