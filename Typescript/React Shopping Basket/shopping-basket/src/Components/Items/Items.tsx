import React from 'react';

// Button from Material UI
import { Button } from '@material-ui/core';

// Styles
import { Wrapper } from './Items.elements';

// Types
import { CartItemProps } from './../../Types';

const Items: React.FC<CartItemProps> = ({ item, handleAddToCart }) => {
    return (
        <Wrapper>
            <img src={item.image} alt={item.title} />
            <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <h3>${item.price}</h3>
            </div>
            <Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>
        </Wrapper>
    )
}

export default Items;
