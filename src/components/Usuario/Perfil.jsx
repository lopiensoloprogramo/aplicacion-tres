import { useContext, useState,useEffect } from "react";
import { UserContext } from "../../context/UserContext";

import Usuario from "./Usuario";
import UsePetition2 from "../../hooks/UsePetition2";

const Perfil=()=>{

    const usuario=useContext(UserContext)
    const datosusuario=UsePetition2('2')
    
    if(!datosusuario)return <><span className='spinner'></span></>
  
    return(

        <>

            <div><h1>Bienvenido {usuario.first_name+" "+usuario.last_name}</h1></div>
          

            <div>
         {
                <Usuario
                key={datosusuario.id} 
                id={datosusuario.id}
                last_name={datosusuario.last_name}
                email={datosusuario.email}
                avatar={datosusuario.avatar}
                first_name={datosusuario.first_name}
            
            /> 
            
         }
               
  





</div>

           
            




      

        </>
    )

}

export default Perfil;