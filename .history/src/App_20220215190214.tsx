import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
  <div className='navigation'>
      <h1>Home</h1>
      <nav>
        <button><Link to="mts">MTS</Link></button>
        <button><Link to="beeline">Beeline</Link></button>
        <button><Link to="megafon">Megafon</Link></button>
      </nav>
    </div>
  );
}

export default App;
