import { BrowserRouter, Routes, Route } from "react-router-dom";

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import MTS from "./pages/MTS";
import Beeline from "./pages/Beeline";
import Megafon from "./pages/Megafon";

ReactDOM.render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="mts" element={<MTS />}/>
      <Route path="beeline" element={<Beeline />}/>
      <Route path="megafon" element={<Megafon />}/>
    </Routes>
  </BrowserRouter>,

  document.getElementById('root')
);
reportWebVitals();
