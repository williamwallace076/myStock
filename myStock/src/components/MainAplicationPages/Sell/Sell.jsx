import "./Sell.css";

import React from 'react';

const Sell = () => {
    return ( 
        <div className="sell-product">
            <h2 className="title-sell-product">Nova Venda</h2>

            <div className="sell-product-area">

                <div className="main-sell-product-area">
                    <div className="search-product-area">
                        <label htmlFor="product-id" >Código ou Nome do Produto</label>
                        <input id="product-id" className="code" type="text" />
                        <span><button>Serach 🔎</button></span>
                    </div>

                    <div className="product-item-area">

                        <div className="sell-item">
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
                                <div>
                                    <p>Adicionar</p>
                                </div>
                                <div>
                                    <p>Remover</p>
                                </div>
                        </div>
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