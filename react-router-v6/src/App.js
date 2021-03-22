import React from 'react';
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./Components/Header";
import Home from "./Components/Home";
import Products from "./Components/Products";
import NotFound from "./Components/NotFound";
import About from "./Components/About";
import ProductIndex from "./Components/ProductIndex";
import ProductDetail from "./Components/ProductDetail";


const App = () => {
    return (
        <>
            <Router>
                <Header />

                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='About' element={<About />}></Route>
                    <Route path='products' element={<Products />}>
                        <Route path="/" element={<ProductIndex />}></Route>
                        <Route path=":productID" element={<ProductDetail />}></Route>
                    </Route>
                    <Route path='*' element={<NotFound />}></Route>
                </Routes>
            </Router>
        </>
    )
}

export default App;
