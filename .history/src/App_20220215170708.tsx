import { Link } from "react-router-dom";
import CompFormik from "./components/CompFormik";
import './App.css';

function App() {
  return (<>
    <CompFormik src={'https://upload.wikimedia.org/wikipedia/en/b/b1/Beeline.svg'} width={'300px'} />
    </>
  );
}

export default App;
