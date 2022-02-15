import { Link } from "react-router-dom";

import './App.css';

function App() {
  return (<>
    <Link to="/">Home</Link> |{" "}
    <Link to="about">About</Link>
    </>
  );
}

export default App;
