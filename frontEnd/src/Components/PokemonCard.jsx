import axios from "axios";
import { useEffect, useState } from "react";

const PokemonCard = ({ name, url }) => {
  const [data, setData] = useState([]);

  const fetchPokemon = async () => {
    const pokeData = (await axios({ url })).data;
    setData(pokeData);
    console.log(pokeData);
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div>
      {data.stats && (
        <figure className={`card card--${data.types[0].type.name}`}>
          <div className="card__image-container">
            <img
              src={data && data.sprites.front_default}
              alt="Eevee"
              className="card__image pokeimg "
            />
          </div>

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
