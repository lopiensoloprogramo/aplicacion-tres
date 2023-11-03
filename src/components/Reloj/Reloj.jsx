import { useEffect, useState } from "react";
import './Reloj.css'
const Reloj=()=>{
        const [lahora,setLahora]=useState()
        const [fecha,setFecha]=useState()
        const actualizarHora=()=>{
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
          
              const horas=horayfecha.getHours()
              const minutos= horayfecha.getMinutes()
              const segundos=horayfecha.getSeconds()

            const lahora= horas+":"+minutos+":"+segundos
            setLahora(lahora)
            const fecha=fechaActual
            setFecha(fecha)
          
         }
         

        setInterval(()=>{actualizarHora()},500)    
        if(!lahora)return <><span className="loading">Loading...</span></>
        return(

          <>
        
          <div>
          <div className="horayfecha">Hora Actual: {lahora}</div>
          <div className="horayfecha">Fecha Actual: {fecha}</div>
         
          </div>
        
          
          </>
         
           
        )
       
    
}
export default Reloj;