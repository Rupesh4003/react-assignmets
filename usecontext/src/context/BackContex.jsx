import React, { createContext } from 'react'


export const BackContext=createContext();

export const BackProvider=({children})=>{
    const[back,setBack]=React.useState(false)
    return <BackContext.Provider value={{back,setBack}}>{children}</BackContext.Provider>
}