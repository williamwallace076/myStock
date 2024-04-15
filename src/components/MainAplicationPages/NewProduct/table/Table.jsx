import React, { useContext, useState } from 'react';
import "./Table.css";
import { ComponentsContext } from "../../../../contexts/Statecomponents";


const TableProduct = () => {

    
    const {allProducts} = useContext(ComponentsContext)


    return ( 
            <table className="product-table" border={1}>
                <caption>Todos os Produtos</caption>
                <thead><tr>
                        <th>Nome</th>
                        <th>Descrição</th>
                        <th>Marca</th>
                        <th>Categoria</th>
                        <th>Preço</th>
                        <th>Código</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>

                   {/* {
                   allProducts.length > 0? 
                    allProducts.map((item)=>{
                        <tr>
                            <td>{allProducts[item].name}</td>
                            <td>{allProducts[item].desc}</td>
                            <td>{allProducts[item].mark}</td>
                            <td>{allProducts[item].category}</td>
                            <td>{allProducts[item].price}</td>
                            <td>{allProducts[item].code}</td>
                            <td></td>
                        </tr>
                   })}  : 
                    <><span>nao produtos aqui</span></>
                } */}
                   
                </tbody>
            </table>
     );
}
 
export default TableProduct;