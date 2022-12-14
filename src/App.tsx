import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Detail from "./Detail";

import Home from "./Home";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
