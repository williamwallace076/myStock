import "./NewProduct.css";

import React from 'react';

const NewProduct = () => {
    return ( 
        <div className="newProduct">

        <h2 className="title-newProduct">Cadastrar Novo Produto</h2>

        <div className="newProduct-area">
            <form className="form-newProduct" action="">
                <label htmlFor="name">Nome do Produto</label>
                <input id="name" className="name-product" type="text" />
                <label htmlFor="desc">Descrição do produto</label>
                <input id="desc" className="description-product" type="text" />
                <label htmlFor="quanty">Quantidade</label>
                <input id="quanty" className="quantity" type="number" />
                <label htmlFor="price">Preço do Produto</label>
                <input id="price" className="price" type="text" />


                <button type="">Cadastrar novo Produto</button>
            </form>
        </div>

        </div>
     );
}
 
export default NewProduct;