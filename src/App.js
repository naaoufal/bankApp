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
import Transactions from "./Components/Interfaces/Transactions";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Inscription" element={<Inscription />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Transactions" element={<Transactions />} />
      </Routes>
    </Router>
  );
}

export default App;
