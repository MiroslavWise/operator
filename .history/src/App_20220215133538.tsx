import { Link } from "react-router-dom";
import SignupForm from "./components/CompFormik";
import './App.css';

function App() {
  return (<>
    {/* <Link to="/">Home</Link> |{" "}
    <Link to="about">About</Link> */}
    <SignupForm />
    </>
  );
}

export default App;
