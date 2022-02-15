import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
  <div>
      <h1>Home</h1>
      <nav>
        <Link to="mts">MTS</Link>
        <Link to="beeline">Beeline</Link>
        <Link to="megafon">Megafon</Link>
      </nav>
    </div>
  );
}

export default App;
