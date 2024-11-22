
import './App.css';
import React from 'react';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return(
    <Router>
      <Router>
        <Route path='/' element={<Inicio />} />
      
      </Router>
    </Router>

  );

  
}

export default App;
