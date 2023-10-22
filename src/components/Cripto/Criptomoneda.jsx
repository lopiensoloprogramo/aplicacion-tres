import { Link } from 'react-router-dom';
import './Criptomoneda.css'

const Criptomoneda=({rank,name,symbol,priceUsd,changePercent24Hr,id})=>{
  

    return(
 
       

            
        <div className='criptomoneda'>
            
            <h2>{name}</h2>
            <div className="info"> 
            
            <p><span className="label">Código: </span>{symbol}</p>
            <p><span className="label">Precio: </span>${parseFloat(priceUsd).toFixed(4)}</p>
            <p><span className="label">Variación 24hrs: </span>
            <span className={parseFloat(changePercent24Hr)> 0 ? "positive":"negative" }>{parseFloat(changePercent24Hr).toFixed(3)}%</span>
            </p>
            </div>
       
            <Link to={`/criptomonedas/${id}`}>Ver Detalles </Link>
        </div>
                  
  
                   
    
     


    )
}

export default Criptomoneda;