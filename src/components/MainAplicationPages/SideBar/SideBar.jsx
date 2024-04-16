import "./SideBar.css";

import React from 'react';

const Sidebar = () => {
    return ( 
        <div className="Sidebar">
            <div className="nav-area">
                <h2 className="title-sidebar">My Stack</h2>
                <nav className="nav-menu">
                    <a href="Home" className="nav-item-sidebar">Inicio</a>
                    <a href="Sell" className="nav-item-sidebar">Nova Venda</a>
                    <a href="Stock" className="nav-item-sidebar">Estoque</a>
                    <a href="NewProduct" className="nav-item-sidebar">Cadastrar <br /> Produto</a>
                </nav>
            </div>
        </div>
     );
}
 
export default Sidebar;
