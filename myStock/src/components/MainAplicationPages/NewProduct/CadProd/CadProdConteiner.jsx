import React from 'react';
import "./CadProdConteiner.css";

const CadProdConteiner = () => {

    
    return ( 
        <div className='form-area' style={{display:'none'}}>
            <form className="form-newProduct" action="">
                <div className='form-inputs-group-1'>
                    <div className='area-input-label'>
                    <label htmlFor="name">Nome do Produto</label>
                    <input id="name" className="name-product" type="text" />
                    </div>

                    <div className='area-input-label'>
                    <label htmlFor="quanty">Quantidade</label>
                    <input id="quanty" className="quantity" type="number" />
                    </div>
                    
                    <div className='area-input-label'>
                    <label htmlFor="price">Preço do Produto</label>
                    <input id="price" className="price" type="text" />
                    </div>
                </div>
                


                <div className='form-inputs-group-2'>
                    <div className='area-input-label'>
                        <label htmlFor="desc">Descrição do produto</label>
                        <input id="desc" className="description-product" type="text" />
                    </div>

                    <div className='area-input-label'>
                        <label for="Category">Categoria do Produto</label>
                        <select className='input-select' id="Category" name="category">
                                <option value="none" disabled></option>
                                <option value="Camisas">Camisas</option>
                                <option value="Calças">Calças</option>
                                <option value="sapatos">Sapatos</option>
                                <option value="bolsas">bolsas</option>
                        </select>
                    </div>

                    <div className='area-input-label'>
                        <label htmlFor="stock">Estoque do Produto</label>
                        <input id="stock" className="stock" type="number" min={0} />
                    </div>
                </div>


                <div className='form-inputs-group-3'>
                    <div  className='area-input-label'>
                        <label htmlFor="imagem">Imagem do Produto</label>
                        <input className='input-file' type="file" name="imagem" id="imagem" multiple/>
                    </div>

                    <div className='area-input-label'>
                        <label for="marca">Marca do Produto</label>
                        <select className='input-select' id="marca" name="marca">
                                <option value="none" disabled></option>
                                <option value="kelvin cleen">kelvin cleen</option>
                                <option value="adids">adids</option>
                                <option value="neique">neique</option>
                        </select>
                    </div>

                    <div className='area-input-label'>
                        <label htmlFor="code">Código do Produto</label>
                        <input id="code" className="code" type="number" min={0} />
                    </div>
                </div>


                <button className='form-cad-btn' >Cadastrar</button>
            </form>
        </div>
     );
}
 
export default CadProdConteiner;