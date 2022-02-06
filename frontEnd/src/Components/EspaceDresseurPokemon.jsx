import { useEffect, useState } from "react";
import axios from "axios";

const EspaceDresseurPokemon = ({ id, user }) => {
  const [data, setData] = useState([]);
  const fetchPokemon = async () => {
    const pokeData = (await axios(`https://pokeapi.co/api/v2/pokemon/${id}/`))
      .data;
    setData(pokeData);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <a
      href="#"
      className="w-full border-t-2  font-medium text-gray-600 py-4 px-4 w-full block hover:bg-gray-100 transition duration-150"
    >
      <img
        src={ data.sprites && data.sprites.front_default}
        alt=""
        className="rounded-full h-6 shadow-md inline-block mr-2"
      />
      {user && user.username} caught a {data && data.name} !
    </a>
  );
};

export default EspaceDresseurPokemon;
