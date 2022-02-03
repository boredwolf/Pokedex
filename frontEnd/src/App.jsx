import "./App.css";
import LoginForm from "./Components/LoginForm";
import Register from "./Components/Register";
import Navbar from "./Components/Navbar";
import PokemonCardContainer from "./Components/PokemonCardContainer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EspaceDresseur from "./Components/EspaceDresseur";
import { useState } from "react";
import { set } from "react-hook-form";

function App() {
  const [user, setUser] = useState();
  return (
    <Router>
      <div>
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route
            path="/"
            element={<PokemonCardContainer user={user} setUser={setUser} />}
          />
          <Route
            path="/espace-dresseur"
            element={<EspaceDresseur user={user} />}
          />
          <Route
            path="/login"
            element={<LoginForm user={user} setUser={setUser} />}
          />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
