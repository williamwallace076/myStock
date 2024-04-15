import "./Header.css";
import imgUser from "../../../assets/17004.png"
import React from 'react';

const Header = () => {
    return ( 
        <div className="Header">
            <div className="User-menu">
                <img src={imgUser} alt="User Image" />
                <span className="Name User">Bem vindo, Usuário !</span>
            </div>
        </div>
     );
}
 
export default Header;