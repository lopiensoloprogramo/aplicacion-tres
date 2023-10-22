import './Cuadricula.css'
import Criptomoneda from "./components/Cripto/Criptomoneda"
import { useEffect, useState } from "react"
import axios from "axios"


function Cuadricula() {

  const API_URL=import.meta.env.VITE_API_URL
  const [criptos,setCriptos]=useState();
  const horayfecha= new Date();
  const dias = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'sábado',
  ];
  const fechaActual=dias[horayfecha.getDay()]+" "+horayfecha.getDate()+"-"+(horayfecha.getMonth()+1)+"-"
  +horayfecha.getFullYear()
  
  const actualizarHora=()=>{

  return horayfecha.getHours()+":"+horayfecha.getMinutes()+":"+horayfecha.getSeconds()
  } 
  console.log(actualizarHora())
  setTimeout(actualizarHora,1000)  




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

  <div className="app-conteiner">

  <div className="titulo">LISTADO DE CRIPTOMONEDAS</div>
  <div className="horayfecha">Fecha Actual: {fechaActual}</div>
  <div className="horayfecha">Hora Actual: {actualizarHora()}</div>
        <div className="cripto-conteiner">
            
                     
         {criptos.map(({id,name,symbol,priceUsd,changePercent24Hr})=> 

                               <Criptomoneda key={id}
                              
                               name={name}
                               symbol={symbol} 
                               priceUsd={priceUsd}
                               changePercent24Hr={changePercent24Hr}
                               id={id}
                               />
           )}


                 


    </div>

  </div>










  // <>
  //   <h1>Lista de Criptomonedas</h1>
  //   <ol>
  
  //     {criptos.map(({id,name,symbol,priceUsd})=> 
  //         <li key={id}>Nombre: {name} Simbolo: {symbol} Precio: {priceUsd}</li>
  //       )}

    

  //   </ol>
  // </>
)

}

export default Cuadricula;
