import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Cuadricula from './Cuadricula.jsx'
import Pagina404 from '../src/Pagina404.jsx'
import App from './App.jsx';
import Home from './Home.jsx';
import './Main.css'
import Criptopage from './components/Cripto/Criptopage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(

<BrowserRouter>  
        <Routes>
          <Route path='/' element={<App/>}>
              <Route index element={<Home />}/>           
          </Route>
          <Route path='/criptomonedas'element={<App/>}>
            <Route index element={<Cuadricula/>} />
            <Route path=':id' element={<Criptopage/>} />
          </Route>


          <Route path='*' element={<Pagina404 />}/>
      </Routes>     
</BrowserRouter>






)
