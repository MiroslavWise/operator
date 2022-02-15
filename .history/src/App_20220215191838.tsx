import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
  <div className='navigation'>
      <h1>Operator</h1>
      <nav>
          <Link to="mts"><button><img src='https://upload.wikimedia.org/wikipedia/commons/c/c2/MTS_logo.svg' width={'24px'} alt='MTS'/> MTS</button></Link>
          <Link to="beeline"><button>Beeline</button></Link>
          <Link to="megafon"><button>Megafon</button></Link>
      </nav>
    </div>
  );
}

export default App;
