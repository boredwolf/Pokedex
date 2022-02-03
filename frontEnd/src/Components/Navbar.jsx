import pokeLogo from "../assets/pokemon-logo-png-1428.png";
import { Link } from "react-router-dom";
import axios from "axios";

const Navbar = ({ user, setUser }) => {
  const logout = () => {
    axios("http://localhost:3001/logout");
    setUser();
  };
  return (
    <div className="bg-red-600">
      <ul className="flex p-2 items-center text-white justify-between font-sigmar mb-10">
        <img className="h-10 w-15" src={pokeLogo}></img>
        <Link to="/">
          <li className="hover:text-black">Pokédex</li>
        </Link>
        {user && (
          <Link to="/espace-dresseur">
            <li className="hover:text-black">Espace dresseur</li>
          </Link>
        )}
        {user != undefined ? (
          <Link to="/login">
            <li className="hover:text-black" onClick={logout}>
              Deconnexion
            </li>
          </Link>
        ) : (
          <Link to="/login">
            <li>Connexion</li>
          </Link>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
