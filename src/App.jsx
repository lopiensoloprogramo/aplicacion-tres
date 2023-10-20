import { useEffect, useState } from "react"
import axios from "axios"
import './App.css'

function App() {

  const API_URL=import.meta.env.VITE_API_URL
  const [criptos,setCriptos]=useState();

  useEffect(()=>{

    //metodo con fech
    // fetch(`${API_URL}assets`)
    // .then( (res)=>res.json())
    // .then((data)=>{
    //   setCriptos(data.data)
   
    // })

    //metodo con Axios
    axios.get(`${API_URL}assets`)
    .then((data)=>{
      setCriptos(data.data.data)
   
    })
    .catch(
      ()=>{console.error("La petición ha fallado")}
    )
  },[])
  
  if(!criptos)return <><span>Cargando...</span></>

return(
  <>
    <h1>Lista de Criptomonedas</h1>
    <ol>
  
      {criptos.map(({id,name,priceUsd})=> 
          <li key={id}>Nombre: {name} Precio: {priceUsd}</li>
        )}

    

    </ol>
  </>
)

}

export default App
