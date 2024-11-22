
import './App.css';

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
