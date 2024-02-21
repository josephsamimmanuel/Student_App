import { createContext } from "react";
import { useState } from "react";

const namecontext=createContext()

function Namecontextprovider(data)
{
    console.log(data)
    const[favorites, setFavorites]=useState([])
    return(
        <namecontext.Provider value={{favorites, setFavorites}}>
            {data.children}
        </namecontext.Provider>
    )
}
export default Namecontextprovider
export {namecontext}