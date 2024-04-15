import "./NewProduct.css";

import React, {useContext} from 'react';
import TableProduct from "./table/Table";
import CadProdConteiner from "./CadProd/CadProdConteiner";
import { ComponentsContext } from "../../../contexts/Statecomponents";


const NewProduct = () => {


    const {setFormNewProd} = useContext(ComponentsContext)

    return ( 
        <div className="newProduct">

        <h2 className="title-newProduct">Produtos Cadastrados</h2>
        
        <CadProdConteiner></CadProdConteiner>

        <div className="newProduct-area">
            <div className="product-buttons">
                <button onClick={()=> setFormNewProd('flex')} className="cad-prod-btn">Cadastrar Novo Produto</button>
            </div>
            <TableProduct></TableProduct>
        </div>

        </div>
     );
}
 
export default NewProduct;