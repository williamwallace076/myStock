import { createContext} from "react";

export const ComponentsContext = createContext(0)

const ConponentProvider = ({children}) => {


    



    return ( 
        <ComponentsContext.Provider value={
            {}
        }>
            {children}

        </ComponentsContext.Provider>
     );
}
 
export default ConponentProvider;