import React ,{createContext}from 'react'

export const AuthContex=createContext();

export const AuthProvider=({children})=>{
    const[auth,setAuth]=React.useState(false)
    const login=(username,password)=>{
        if(username&&password)
        { console.log(username,password)
            setAuth(true)
        }
    }
    const logout=()=>{
        setAuth(false)

    }
    return <AuthContex.Provider value={{login,logout,auth}}>{children}</AuthContex.Provider>
}
