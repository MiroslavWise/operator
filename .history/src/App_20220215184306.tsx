import './App.css';
import MTS from "./pages/MTS";
import { Link } from 'react-router-dom';

function App() {
  return (
  <div>
      <h1>Home</h1>
      <nav>
        <Link to="mts">Home</Link>
        <Link to="beelane">Beeline</Link>
        <Link to="Megafon">Megafon</Link>
      </nav>
    </div>
  );
}

export default App;
