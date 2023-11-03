import { createContext, useEffect, useState} from "react"
import UsePetition2 from "../hooks/UsePetition2"

const UserContext= createContext()

const UserContextProvider=({children})=>{

const usuario= UsePetition2("2")


if(!usuario)return <><span className='spinner'></span></>
console.log(usuario)
    return(

        <UserContext.Provider value={usuario}>
            {children}
        </UserContext.Provider>

    )
}

export {UserContext,UserContextProvider}