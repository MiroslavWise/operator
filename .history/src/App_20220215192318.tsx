import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
  <div className='navigation'>
      <h1>Operator</h1>
      <nav>
          <Link to="mts"><button><img src='https://upload.wikimedia.org/wikipedia/commons/c/c2/MTS_logo.svg' height={'24px'} alt='MTS'/><a>MTS</a></button></Link>
          <Link to="beeline"><img src={'https://upload.wikimedia.org/wikipedia/en/b/b1/Beeline.svg'} height={'24px'}/><button>Beeline</button></Link>
          <Link to="megafon"><button>Megafon</button></Link>
      </nav>
    </div>
  );
}

export default App;
