const CriptoHistorial=({history})=>{

 

    return(
        
        <div>
       
   

        {(history).map(({priceUsd,date,time})=>(
            
          <tbody className="table-respuesta">
          <tr>
          <td ><p>${parseFloat(priceUsd).toFixed(3) }</p></td>
          <td><p>{date}</p></td> 
          <td><p>{time}</p></td>
         

          </tr>
          
          </tbody>
    ))}    
  
  </div>
     
    )
}

export default CriptoHistorial;