import { useParams } from "react-router-dom";
import './Criptodetalles.css' 
import UsePetition from "../../hooks/UsePetition";
import CriptoInfo from "./Info/CriptoInfo";
import CriptoHistorial from "./Info/CriptoHistorial";

    const Criptodetalles=()=>{  
    const params= useParams()
    const idSelect= params.id
    const [criptoPeticion,cargandoCripto]= UsePetition(`assets/${idSelect}`)
    const [historyPeticion,cargandoHistory]=UsePetition(`assets/${idSelect}/history/?interval=d1`)
      
  
  if(!cargandoCripto||!cargandoHistory)return <><span className="spinner"></span></>
console.log(cargandoCripto)
 
    return(
       <>               
<h1 className="titulo-cripto">Soy la criptomoneda <span className="resaltar">{(criptoPeticion.id)} </span></h1>
<div className="conteiner">
         
        <div className="generales-columnas" >  
                <div>RANK</div>
                <div>NAME</div>
                  <div>SYMBOL</div>
                  <div>PRICE</div>      
        </div>
        
        <div className="generales-filas">{
             criptoPeticion && <CriptoInfo  cripto={criptoPeticion}/> } 
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

        {/*Con los simbolos && se puede elegir la porción de codigo que quermos renderizar 
        
          asi como aca abajo, los && significa cuando exista...*/}
        { historyPeticion && <CriptoHistorial history={historyPeticion}/> 
        }
  
        </>
    )
}

export default Criptodetalles;