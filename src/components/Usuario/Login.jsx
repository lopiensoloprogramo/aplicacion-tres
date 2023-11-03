import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router";
import './Login.css'
const Login=()=>{
    const [cargando,setCargando]=useState(false)
    const [error,setError]=useState()
    const navigation= useNavigate()
    
    const [user,setUser]=useState({

        "email":"",
        "password":""
    })

    const Onsubmit=(e)=>{
        e.preventDefault();
        setCargando(true)
        setError(null)
        axios.post('https://reqres.in/api/login',user)
        .then(
           data=>{ localStorage.setItem("tokenEdMarket",data.data.token)
           navigation("/")
           setCargando(false)
        }
           
        )
        .catch(e=>{
            console.error(e)
            setCargando(false)
            setError(e.response.data.error)
        })
    }

        if(localStorage.getItem("tokenEdMarket"))  return <Navigate to="/"/>

    return(<>
        <h1>Iniciar Sesión</h1>

        <div className="login-conteiner">

        <form onSubmit={Onsubmit}>
            <div className="field">
                <label htmlFor="email">Email</label>
                <input required type="email" name="email" 
                onChange={(e)=>setUser({
                    ...user,
                    email: e.target.value
                })}/>
            </div>
            <div className="field">

                <label htmlFor="password"> Contraseña</label>
                <input required type="password" name="password"
                  onChange={(e)=>setUser({
                    ...user,
                    password: e.target.value
                })}
                />
            </div>
            <div className="submit">
                <input type="submit" value={cargando?'Cargando...':'Ingresar'}/>
            </div>

        </form>
                {
                    error && <span className="error">{error}</span>

                }
    
        </div>


    </>)
}

export default Login;