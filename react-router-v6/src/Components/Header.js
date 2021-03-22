import React from 'react'
import { Link } from 'react-router-dom';

import { AiOutlineShoppingCart } from 'react-icons/ai'

const Header = () => {
    return (
        <nav className="nav">
            <Link to="/">Home</Link> {' | '}
            <Link to="about">About</Link> {' | '}
            <Link to="products">Products</Link> <br /><br />
        </nav>
    )
}

export default Header
