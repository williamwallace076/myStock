import React from 'react';
import "./Table.css"


const TableProduct = () => {
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
                    <tr>
                        <td><p>Camisa Cowntry</p></td>
                        <td><p>100% algodão</p></td>
                        <td><p>kelvin cleen</p></td>
                        <td><p>Camisas</p></td>
                        <td><p>R$ 12,99</p></td>
                        <td><p>0000001</p></td>
                        <td><p>&nbsp;</p></td>
                    </tr>
                    <tr>
                        <td><p>Calça Jeans</p></td>
                        <td><p>100% poliester</p></td>
                        <td><p>adids</p></td>
                        <td><p>Calças</p></td>
                        <td><p>R$ 20,99</p></td>
                        <td><p>0000002</p></td>
                        <td><p>&nbsp;</p></td>
                    </tr>
                    <tr>
                        <td><p>Sapatenis</p></td>
                        <td><p>Flexivel</p></td>
                        <td><p>neique</p></td>
                        <td><p>Sapatos</p></td>
                        <td><p>R$ 50,99</p></td>
                        <td><p>0000003</p></td>
                        <td><p>&nbsp;</p></td>
                    </tr>
                </tbody>
            </table>
     );
}
 
export default TableProduct;