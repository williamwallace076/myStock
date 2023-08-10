import { Link } from "react-router-dom";
import "./SideBar.css";

import React from 'react';

const Sidebar = () => {
    return ( 
        <div className="Sidebar">
            <div className="nav-area">
                <nav className="nav-menu">
                    <a href="Home" className="nav-item-sidebar">Geral</a>
                    <div className="nav-item-sidebar">Estoque</div>
                    <div className="nav-item-sidebar">Cadastrar Produto</div>
                    <div className="nav-item-sidebar">Nova Venda</div>
                </nav>
            </div>
        </div>
     );
}
 
export default Sidebar;
