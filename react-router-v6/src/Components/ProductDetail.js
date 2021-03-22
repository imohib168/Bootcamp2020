import React from 'react'
import { useParams } from 'react-router-dom'

import { shoes } from './../data';

const ProductDetail = () => {

    const { productID } = useParams();
    const product = shoes[productID];
    const { name, img } = product;

    // console.log(product);

    return (
        <div>
            <h2>{name}</h2>
            <img
                style={{
                    height: '400px',
                    width: '400px',
                }}
                src={img} alt={name}
            />
        </div>
    )
}

export default ProductDetail
