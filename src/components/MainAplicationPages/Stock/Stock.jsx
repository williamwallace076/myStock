import "./Stock.css";

import React from 'react';

import { listProducts } from "../../../api/dbProducts";

const Stock = () => {


    return (
        <div className="Stock-area">
            <h1 className="title-stock">Produtos Em Estoque </h1>

            <div className="stock-main-area">
                <div className="stock-item-area">
                <table className="stock-table">
                        <thead>
                            <tr>
                                <th>Nome do Produto</th>
                                <th>Descrição</th>
                                <th>Valor da Unidade (R$)</th>
                                <th>Total de Unidades</th>
                                <th>Valor Total (R$)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {listProducts.map(item => (
                                <tr key={item.id}>
                                    <td>{item.nome}</td>
                                    <td>{item.subtitle}</td>
                                    <td>{item.valor.toFixed(2)}</td>
                                    <td>{item.quantity}</td>
                                    <td>{(item.valor * item.quantity).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
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