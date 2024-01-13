import React from 'react';
import {Route, Routes } from "react-router";
import Home from './components/MainAplicationPages/Home/Home';
import Stock from './components/MainAplicationPages/Stock/Stock';
import NewProduct from './components/MainAplicationPages/NewProduct/NewProduct';
import Sell from './components/MainAplicationPages/Sell/Sell';


export default props  => {

    return(

        <Routes>
            <Route exact path="/" element={<Home></Home>}/>
            <Route path="/Home" element={<Home></Home>} />
            <Route path="/Stock" element={<Stock></Stock>} />
            <Route path="/NewProduct" element={<NewProduct></NewProduct>} />
            <Route path="/Sell" element={<Sell></Sell>} />
        </Routes>

    )
}