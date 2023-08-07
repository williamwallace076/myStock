import React from 'react';
import {Route, Routes } from "react-router";
import Home from './components/MainAplicationPages/Home/Home';


export default props  => {

    return(

        <Routes>
            <Route exact path="/" element={<Home></Home>}/>
            <Route path="/Home" element={<Home></Home>} />
        </Routes>

    )
}