import './App.css';
import React, { useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Inicio from './pages/inicio.js';
import Login from './pages/login.js';
import Precios from './pages/precios.js';
import Estado from './pages/estado.js'; 
import Factura from './pages/factura.js';
import Tecnico from './pages/estadoTecnico.js';
import Contactanos from './pages/contactanos.js';
import Nosotros from './pages/nosotros.js';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/login' element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
        <Route path='/factura' element={isAuthenticated ? <Navigate to="/factura "/> : <Factura />} />
        <Route path='/precios' element={<Precios />} />
        <Route path='/estado' element={<Estado />} />
        <Route path='/tecnico' element={<Tecnico />} />
        <Route path='/contactanos' element={< Contactanos/>} />
        <Route path='/nosotros' element={< Nosotros/>} />
  
      </Routes>
    </Router>
  );
}

export default App;
