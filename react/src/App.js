import Main from './components/Main.js'
import Services from './components/Services.js'
import Reviews from './components/Reviews.js'
import Navigation from "./components//Navigation";

import { Routes, Route, useLocation } from "react-router-dom";

import './App.css';

function App() {
  return (
<div className="App">
<Navigation />

      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/reviews" element={<Reviews/>} />
      </Routes>
    </div>
  );
}

export default App;
