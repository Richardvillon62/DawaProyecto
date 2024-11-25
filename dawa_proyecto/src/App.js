import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Inicio from './pages/inicio.js';
import Login from './pages/login.js';
import Contactanos from './pages/contactanos.js';
import Nosotros from './pages/nosotros.js';



function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return(
    <Router>
      <Router>
        <Route path='/' element={<Inicio />} />
        |<Route path='/login' element={isAuthenticated ? <Navigate to="/" /> : <Login />} />
        <Route path='/contactanos' element={< Contactanos/>} />
        <Route path='/nosotros' element={< Nosotros/>} />
  
      </Router>
    </Router>

  );

  
}

export default App;
