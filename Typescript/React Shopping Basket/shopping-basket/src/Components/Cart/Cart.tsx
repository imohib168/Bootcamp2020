import React from 'react';

// Component
import CartItem from './../CartItem/CartItem';

// Styles
import { Wrapper } from './Cart.elements';

// Types
import { ProductType, CartProps } from './../../Types'

const Cart: React.FC<CartProps> = ({ cartItems, addToCart, removeFromCart }) => {

    const calculateTotal = (items: ProductType[]) =>
        items.reduce((ack: number, item) => ack + item.amount * item.price, 0);

    return (
        <Wrapper>
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 && <p>No Items in Cart</p>}
            {cartItems.map(item => (
                <CartItem
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            ))}
            <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>

        </Wrapper>
    )
}

export default Cart;