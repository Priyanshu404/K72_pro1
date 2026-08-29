import { useRef, useState } from "react";

import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Agences from "./pages/Agences";
import Navbar from "./components/Navigation/Navbar";
import FullScreenNav from "./components/Navigation/FullScreenNav";


function App() {
  

  return (
    <div className='overflow-hidden'>
      <FullScreenNav />
       <Navbar /> 


       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/agence" element={<Agences />} />
      </Routes>
    </div>
  );
}

export default App;
