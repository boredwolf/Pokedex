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
    <div className=" grid grid-cols-4">
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
  );
};

export default PokemonCardContainer;
