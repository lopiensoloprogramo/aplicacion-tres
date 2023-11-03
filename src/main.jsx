import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Cuadricula from './Cuadricula.jsx'
import Pagina404 from '../src/Pagina404.jsx'
import App from './App.jsx';
import Home from './Home.jsx';
import './Main.css'
import Criptopage from './components/Cripto/Criptopage.jsx';
import Perfil from './components/Usuario/Perfil.jsx';
import { UserContextProvider } from './context/UserContext.jsx';
import Login from './components/Usuario/Login.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(

  <UserContextProvider>
        <BrowserRouter>  
          <Routes>
            <Route path='/' element={<App/>}>
                <Route index element={<Home />}/> 
                <Route path='perfil'element={<Perfil/>}/>          
            </Route>
            <Route path='/criptomonedas'element={<App/>}>
              <Route index element={<Cuadricula/>} />
              <Route path=':id' element={<Criptopage/>} />
            </Route>
            
            <Route path='/login' element={<Login />}/>
            <Route path='*' element={<Pagina404 />}/>
        </Routes>     
  </BrowserRouter>

  </UserContextProvider>









)
