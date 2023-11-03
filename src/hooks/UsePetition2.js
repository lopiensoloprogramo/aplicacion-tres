import axios from "axios";
import { useEffect,useState } from "react";

const UsePetition2=(endpoint)=>{

    
    const [datosusuario,setDatosusuario]= useState()

  
    useEffect(()=>{

    axios.get(`https://reqres.in/api/users/${endpoint}`)
    .then((datosusuario)=>{
     
        setDatosusuario(datosusuario.data.data)

      console.log("Ejecutando")
    
    })
    
    .catch(
      ()=>{
        console.error("La petición ha fallado")

      }
      
    )
  },[])


 
    return datosusuario


}
export default UsePetition2;