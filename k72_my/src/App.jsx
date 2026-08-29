import { useState } from "react";

import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Agences from "./pages/Agences";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="text-6xl text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/agence" element={<Agences />} />
      </Routes>
    </div>
  );
}

export default App;
