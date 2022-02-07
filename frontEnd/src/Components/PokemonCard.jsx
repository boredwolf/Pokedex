import axios from "axios";
import { useEffect, useState } from "react";
import Pokeball from "../assets/5a38400bb45730.3526330915136358517387.png";

const PokemonCard = ({ name, url, user, setUser }) => {
  const [data, setData] = useState([]);
  const [isCatched, setIsCatched] = useState(false);

  const fetchPokemon = async () => {
    const pokeData = (await axios({ url })).data;
    setData(pokeData);
  };

  const iCatchedIt = async () => {
    await axios.post("http://localhost:3001/catchPokemon", {
      userId: user.id,
      pokeId: data.id,
    });
  };

  const fetchUser = async () => {
    const result = (
      await axios.post("http://localhost:3001/me", { id: user.id })
    ).data;

    setUser(result);
  };

  const CatchThemAll = async () => {
    setIsCatched(!isCatched);
    await iCatchedIt();
    await fetchUser();
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div onClick={CatchThemAll}>
      {data.stats && (
        <figure className={`card card--${data.types[0].type.name}`}>
          {user && user.pokemon.some(function (item) {
            return item.pokeId === data.id;
          }) ? (
            <div className="card__image-container flex">
              <img className="h-5 w-5 absolute" src={Pokeball} />
              <img
                src={data && data.sprites.front_default}
                alt={name}
                className="card__image pokeimg "
              />
            </div>
          ) : (
            <div className="card__image-container">
              <img
                src={data && data.sprites.front_default}
                alt={name}
                className="card__image pokeimg "
              />
            </div>
          )}

          <figcaption className="card__caption">
            <h1 className="card__name">{name}</h1>

            <h3 className="card__type">{data.types[0].type.name}</h3>

            <table className="card__stats">
              <tbody>
                <tr>
                  <th>HP</th>
                  <td>{data && data.stats[0].base_stat}</td>
                </tr>
                <tr>
                  <th>Attack</th>
                  <td>{data && data.stats[1].base_stat}</td>
                </tr>

                <tr>
                  <th>Defense</th>
                  <td>{data && data.stats[2].base_stat}</td>
                </tr>

                <tr>
                  <th>Special Attack</th>
                  <td>{data && data.stats[3].base_stat}</td>
                </tr>
                <tr>
                  <th>Special Defense</th>
                  <td>{data && data.stats[4].base_stat}</td>
                </tr>
                <tr>
                  <th>Speed</th>
                  <td>{data && data.stats[5].base_stat}</td>
                </tr>
              </tbody>
            </table>

            <div className="card__abilities">
              <h4 className="card__ability">
                <span className="card__label">Ability</span>
                {data && data.abilities[0].ability.name}
              </h4>
              <h4 className="card__ability">
                <span className="card__label">Hidden Ability</span>
                {data && data.moves[0].move.name}
              </h4>
            </div>
          </figcaption>
        </figure>
      )}
    </div>
  );
};

export default PokemonCard;
