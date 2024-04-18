import { createContext, useEffect, useState} from "react";
import { listProducts } from "../api/dbProducts";


export const ComponentsContext = createContext(0)

const ConponentProvider = ({children}) => {
    
    
    
    const [formNewProd, setFormNewProd ] = useState("none")


    const [formInfo, setFormInfo] = useState({
        name: "",
        description : "",
        mark: "",
        category:"",
        price:"",
        code:"", 
        quantity: ""
    })

    const [allProducts, setAllProducts] = useState(listProducts)

    

    const updateAllProductsList = ()=>{

    setAllProducts(allProducts.push(formInfo))

    }

    return ( 
        <ComponentsContext.Provider value={
            {setFormNewProd,
            formNewProd,
            formInfo,
            setFormInfo, 
            allProducts,
            setAllProducts,
            updateAllProductsList}
        }>
            {children}

        </ComponentsContext.Provider>
     );
}
 
export default ConponentProvider;