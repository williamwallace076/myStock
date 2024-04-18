import React, { useContext, useState } from 'react';
import "./Table.css";
import { ComponentsContext } from "../../../../contexts/Statecomponents";


const TableProduct = () => {


    const { allProducts } = useContext(ComponentsContext)


    return (
        <table className="product-table" border={1}>
            <caption>Todos os Produtos</caption>
            <thead><tr>
                <th>Nome</th>
                {/* <th>Descrição</th> */}
                <th>Marca</th>
                {/* <th>Categoria</th> */}
                <th>Preço</th>
                <th>Código</th>
                <th>Ações</th>
            </tr>
            </thead>
            <tbody>

                {
                    allProducts.length > 0 ? (
                        allProducts.map((item) => {
                            return (
                                <tr key={item.id}>
                                    <td>{item.nome}</td>
                                    {/* <td>{allProducts[item-1].desc}</td> */}
                                    <td>{item.marca}</td>
                                    {/* <td>{allProducts[item-1].category}</td> */}
                                    <td>{item.valor}</td>
                                    <td>{item.id}</td>
                                    <td>
                                        <div className='action-bts-area'>
                                            <button className="cad-prod-table-button" id='bt-excluir'>Excluir</button>
                                            <button className="cad-prod-table-button" id='bt-editar'>Editar</button>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td colSpan="5">Não há produtos aqui</td>
                        </tr>
                    )
                }

            </tbody>
        </table>
    );
}

export default TableProduct;