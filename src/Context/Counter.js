import { createContext, useState } from "react";


export let counterContext=createContext()
export let CountetContextProvider=(props)=>{
    let[count,setcount]=useState(0)
    let increase=()=>{
    setcount(count+1)
    }
    let decrease=()=>{
        setcount(count-1)
        }
    return <counterContext.Provider value={{count,increase,decrease}}>
        {props.children}
    </counterContext.Provider>
}