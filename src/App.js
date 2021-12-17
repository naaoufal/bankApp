import React from "react";
import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Login from "./Components/Interfaces/Login"
import Inscription from "./Components/Interfaces/Inscription";
import Home from "./Components/Interfaces/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Inscription" element={<Inscription />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
