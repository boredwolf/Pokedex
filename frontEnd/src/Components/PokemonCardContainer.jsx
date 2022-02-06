import axios from "axios";
import { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";

const PokemonCardContainer = ({ user, setUser }) => {
  const [data, setData] = useState([]);

  const fetchPokemon = async () => {
    const pokeData = (
      await axios("https://pokeapi.co/api/v2/pokemon/?generation=1&limit=151")
    ).data;
    setData(pokeData.results);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <>
    <h1 className="font-sigmar m-8 bg-red-600 p-4 text-xs text-white border-2 border-black">Selectionne les pokémons que tu as capturé pour les ajouter à ta colletion !</h1>
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.map((pokemon, index) => {
        return (
          <PokemonCard
            key={index}
            name={pokemon.name}
            url={pokemon.url}
            user={user}
            setUser={setUser}
          />
        );
      })}
    </div>
    </>
  );
};

export default PokemonCardContainer;
