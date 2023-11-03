import { useEffect } from 'react';
import './Cuadricula.css'
import Criptomoneda from "./components/Cripto/Criptomoneda"
import UsePetition from './hooks/UsePetition';
import Reloj from './components/Reloj/Reloj';



function Cuadricula() {

  const API_URL=import.meta.env.VITE_API_URL
  
  
    //metodo con fech
    // fetch(`${API_URL}assets`)
    // .then( (res)=>res.json())
    // .then((data)=>{
    //   setCriptos(data.data)
   
    // })

    //metodo con Axios
 
    const[criptos,cargandoCripto,hora]= UsePetition("assets")

  if(!criptos)return <><span className='spinner'></span></>
  
return(

  <div className="app-conteiner">
  
  <div className="titulo">LISTADO DE CRIPTOMONEDAS</div>
  {<Reloj/>}

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
