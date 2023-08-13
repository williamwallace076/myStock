import { Link } from "react-router-dom";
import "./SideBar.css";

import React from 'react';

const Sidebar = () => {
    return ( 
        <div className="Sidebar">
            <div className="nav-area">
                <nav className="nav-menu">
                    <a href="Home" className="nav-item-sidebar">Geral</a>
                    <a href="Stock" className="nav-item-sidebar">Estoque</a>
                    <a href="NewProduct" className="nav-item-sidebar">Cadastrar <br /> Produto</a>
                    <a href="Sell" className="nav-item-sidebar">Nova <br /> Venda</a>
                </nav>
            </div>
        </div>
     );
}
 
export default Sidebar;
