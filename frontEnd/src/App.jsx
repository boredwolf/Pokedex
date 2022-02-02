import "./App.css";
import Navbar from "./Components/Navbar";
import PokemonCardContainer from "./Components/PokemonCardContainer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EspaceDresseur from "./Components/EspaceDresseur";

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<PokemonCardContainer/>}/>
      <Route path="/espace-dresseur" element={<EspaceDresseur/>}/>

      </Routes>
    </div>
    </Router>
  );
}

export default App;
