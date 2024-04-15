import "./Stock.css";

import React from 'react';

const Stock = () => {

    const items = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    return ( 
        <div className="Stock-area">
            <h1 className="title-stock">Produtos Em Estoque </h1>

            <div className="stock-main-area">
            <div className="stock-item-area">
                       {items.map((item)=>{
                        return(<div className="stock-item">
                        <div>
                            <p>nome produto</p>
                        </div>
                        <div>
                            <p>descrição</p>
                        </div>
                        <div>
                            <p>R$10,00</p>
                        </div>
                        <div>
                            <p>1</p>
                        </div>
                        <div>
                            <p>R$ 10,00</p>
                        </div>
                        <div>Editar</div>
                        <div>Excluir</div>
                </div>)
                       })}
                    </div>

                    <div className="filter-area">
                        <h2>Filtros</h2>
                        <select name="Tipo" id="1">
                            <option value="Tipo" disabled>Tipo</option>
                            <option value="Camisa">Camisa</option>
                            <option value="Calça">Calça</option>
                            <option value="Bolsa">Bolsa</option>
                        </select>
                        <select name="Nome" id="2">
                            <option value="nome" disabled>Nome</option>
                            <option value="atoz">De A a Z </option>
                            <option value="ztoa">De Z a A </option>
                        </select>
                    </div>
            </div>
        </div>
     );
}
 
export default Stock;