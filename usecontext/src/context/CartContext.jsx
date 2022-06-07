import React, {createContext} from "react";
export const CartContext = createContext();

 export const CartProvider=({children})=>{
    // const[selectedItem,setSelectedItem]=React.useState()
    const[count,setCount]=React.useState(0)
    const handle=(value)=>{
        setCount(count+value)
    }
    const buy=()=>{

    }

  return <CartContext.Provider value={{count,handle,buy}}>{children}</CartContext.Provider>



}