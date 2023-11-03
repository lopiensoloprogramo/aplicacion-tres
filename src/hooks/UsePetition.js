import axios from "axios";
import { useEffect,useState } from "react";

const UsePetition=(endpoint)=>{

    const API_URL=import.meta.env.VITE_API_URL
    const [data,setData]=useState();
    const [cargo,setCargo]=useState()

  
    useEffect(()=>{
    setCargo(false)
    axios.get(`${API_URL}${endpoint}`)
    .then((data)=>{
     
      setData(data.data.data)
      setCargo(true)
      console.log("Ejecutando")
      {console.log(data)}
    })
    
    .catch(
      ()=>{
        console.error("La petición ha fallado")
        setCargo(false)
      }
      
    )
  },[])


 
    return [data,cargo]


}
export default UsePetition;