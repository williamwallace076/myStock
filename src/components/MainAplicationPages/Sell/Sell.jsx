import "./Sell.css";

import React from 'react';
import { listProducts } from "../../../api/dbProducts"

const Sell = () => {

    const esconder = true;
    return (
        <div className="sell-product">
            <h2 className="title-sell-product">Nova Venda</h2>

            <div className="sell-product-area">

                <div className="main-sell-product-area">
                    <div className="search-product-area">
                        <input id="product-id" placeholder="Código ou nome do produto" className="product-id" type="text" />
                        <span><button>Procurar🔎</button></span>
                    </div>

                    <div className="product-item-area">

                            <table className="sell-item">
                                <thead>
                                    <tr className="row-table-head">
                                        <th>Nome do Produto</th>
                                        <th>Valor da Unidade (R$)</th>
                                        <th>Total de Unidades</th>
                                        <th>Valor Total (R$)</th>
                                        <th>Ações</th>
                                    </tr>
                                </thead>
                                {esconder == true ? (<div>Procure por um produto !</div>

                        ) : (
                                <tbody>
                                    {listProducts.map(item => (
                                        <tr key={item.id}>
                                            <td>{item.nome}</td>
                                            <td>{item.valor.toFixed(2)}</td>
                                            <td>{item.quantity}</td>
                                            <td>{(item.valor * item.quantity).toFixed(2)}</td>
                                            <td>
                                                <div className="actions"><button className="add">Adicionar</button><button className="rem">Remover</button></div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                        )}
                            </table>


                    </div>
                </div>

                <div className="sell-product-side-area">
                    <h2>Resumo</h2>
                    <div className="total-area">
                        <h4>Total:</h4>
                        <span>R$ 100,00</span>
                    </div>
                    <div className="total-products">
                        <h4>Total de produtos:</h4>
                        <span>23</span>
                    </div>

                    <button>Finalizar Venda</button>
                </div>

            </div>
        </div>
    );
}

export default Sell;