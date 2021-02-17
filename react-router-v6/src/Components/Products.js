import React from 'react'
import { Outlet } from 'react-router-dom'

const Products = () => {
    return (
        <div>
            <h2>products</h2>
            <Outlet />
        </div>
    )
}

export default Products
