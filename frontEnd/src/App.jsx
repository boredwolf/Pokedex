import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { fetchMe } from "./services/api";
import LoginForm from "./Components/LoginForm";
import Register from "./Components/Register";
import Navbar from "./Components/Navbar";
import PokemonCardContainer from "./Components/PokemonCardContainer";
import EspaceDresseur from "./Components/EspaceDresseur";

import "./App.css";

function App() {
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setUser(await fetchMe());
      } catch (e) {
        setUser();
      }
    };

    fetchData();
  }, []);

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
