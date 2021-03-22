import React from 'react';
import { Link } from 'react-router-dom';

import { shoes } from './../data';

const productIndex = () => {
    return (
        <div>
            <ul>
                {Object.entries(shoes).map(([productID, { name, img }]) => (
                    <li key={productID}>
                        <Link to={productID}>
                            <h2>{name}</h2>
                            <img
                                style={{
                                    height: '200px',
                                    width: '200px',
                                }}
                                src={img} alt={name}
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default productIndex
