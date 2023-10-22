import { useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import './Criptodetalles.css' 
const Criptodetalles=()=>{
    const API_URL=import.meta.env.VITE_API_URL
   
    const params= useParams()
    const idSelect= params.id
    const [criptos,setCriptos]=useState();
    const [history, setHistory]=useState();
    const url_history=API_URL+"assets"+"/"+idSelect+"/"+"history"+"?interval=d1"
    useEffect(()=>{
    axios.get(`${API_URL}assets/${idSelect}`)
    .then((data)=>{
      setCriptos(data.data.data)
      
    })
    
    .catch(
      ()=>{console.error("La petición ha fallado")}
    )
  },[])
  useEffect(()=>{
    axios.get(url_history)
    .then((data)=>{
      setHistory(data.data.data)
      
    })
    
    .catch(
      ()=>{console.error("La petición ha fallado")}
    )
  },[useEffect])


  
  if(!criptos)return <><span>Cargando...</span></>
  if(!history)return <><span>Cargando...</span></>
 
    return(

        <>
                
        <h1>Soy la criptomoneda <span className="resaltar">{(criptos.id)} </span></h1>
       <div className="conteiner">
         
                <div className="generales-columnas" >  
                    <div>RANK</div>
                    <div>NAME</div>
                    <div>SYMBOL</div>
                    <div>PRICE</div>
                    
                    
                    
                </div>

                   <div className="generales-filas">
                   <div>{criptos.rank}</div>
                    <div>{criptos.name}</div>
                    <div>{criptos.symbol}</div>
                    <div>{criptos.priceUsd}</div>

                   </div>
          
                   
                  
             
           
            
                    
        
    
            
       </div>
        <div className="history-day">
             <h2>Historial de cambios diarios</h2>
        </div>
       <table className="table-titulos">
        <tbody>
            <tr><td>Price</td>
                <td>Fecha</td>
                <td>Hora</td>
            </tr>
          

        
        
        </tbody>
       </table>
       {(history).map(function(history){
                
                    return (<tbody className="table-respuesta">
                        <tr>
                        <td><p>{history.priceUsd}</p></td>
                        <td><p>{history.date}</p></td> 
                        <td><p>{history.time}</p></td>
                        
                    
                         </tr>
                        
                        </tbody>)
            })}      
        {
        
        
        }
        </>
    )
}

export default Criptodetalles;