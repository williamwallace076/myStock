import React, {useContext, useState, useEffect, useRef} from 'react';
import "./CadProdConteiner.css";
import { ComponentsContext } from "../../../../contexts/Statecomponents";

const CadProdConteiner = () => {

    const name = useRef()
    const desc = useRef()
    const mark = useRef()
    const categ = useRef()
    const price = useRef()
    const code = useRef()
    const quanty = useRef()

    const {formNewProd, setFormNewProd, formInfo, setFormInfo, updateAllProductsList } = useContext(ComponentsContext)


    const getFormularyInfo = ()=>{
        setFormNewProd("none")
        console.log(formInfo)

        setFormInfo({
            name: name.current.value,
            description : desc.current.value,
            mark: mark.current.value,
            category: categ.current.value,
            price:price.current.value,
            code:code.current.value, 
            quantity: quanty.current.value
        })

        updateAllProductsList()

    }



    const noSubmit =(e)=>{
        e.preventDefault()
    }

    return ( 
        <div className='form-area' style={{display:formNewProd}}>
            <form className="form-newProduct" onSubmit={noSubmit} >
                <div className='form-inputs-group-1'>
                    <div className='area-input-label'>
                    <label htmlFor="name">Nome do Produto</label>
                    <input id="name" ref={name} className="name-product" type="text" />
                    </div>

                    <div className='area-input-label'>
                    <label htmlFor="quanty">Quantidade</label>
                    <input id="quanty" ref={quanty} className="quantity" type="number" />
                    </div>
                    
                    <div className='area-input-label'>
                    <label htmlFor="price">Preço do Produto</label>
                    <input id="price" ref={price} className="price" type="text" />
                    </div>
                </div>
                


                <div className='form-inputs-group-2'>
                    <div className='area-input-label'>
                        <label htmlFor="desc">Descrição do produto</label>
                        <input id="desc" ref={desc}  className="description-product" type="text" />
                    </div>

                    <div className='area-input-label'>
                        <label htmlFor="Category">Categoria do Produto</label>
                        <select className='input-select' id="Category"ref={categ}  name="category">
                                <option value=""></option>
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
                        <label htmlFor="marca">Marca do Produto</label>
                        <select className='input-select' id="marca" ref={mark} name="marca">
                                <option value="" ></option>
                                <option value="kelvin cleen">kelvin cleen</option>
                                <option value="adids">adids</option>
                                <option value="neique">neique</option>
                        </select>
                    </div>

                    <div className='area-input-label'>
                        <label htmlFor="code">Código do Produto</label>
                        <input id="code" ref={code} className="code" type="number" min={0} />
                    </div>
                </div>


                <button className='form-cad-btn' onClick={getFormularyInfo} >Cadastrar</button>
            </form>
        </div>
     );
}
 
export default CadProdConteiner;