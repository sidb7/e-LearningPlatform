import React , {createContext, useState} from "react";

export const ContextState = createContext()

export const ContextProvider =  ({children}) =>{

    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [shoppingCartData, setShoppingCartData] = useState([])
    const login =()=>setIsAuthenticated(true)
    const logout=()=>setIsAuthenticated(false)

    return(

        <ContextState.Provider value={{isAuthenticated,login,logout,shoppingCartData,setShoppingCartData}}>
        {children}

        </ContextState.Provider>
    )

}

