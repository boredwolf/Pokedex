import { useEffect } from "react";
import Pokeball from "../assets/5a38400bb45730.3526330915136358517387.png";
import EspaceDresseurPokemon from "./EspaceDresseurPokemon";
const EspaceDresseur = ({ user }) => {
  return (
    <div className="container mx-auto my-40">
      <div>
        <div className="bg-white relative shadow-xl w-5/6 md:w-4/6  lg:w-4/6 xl:w-4/6 mx-auto">
          <div className="flex justify-center">
            <img
              src={Pokeball}
              alt=""
              className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-2xl border-4 border-white"
            />
          </div>

          <div className="mt-16">
            <h1 className="font-bold text-center text-3xl text-gray-900 font-sigmar ">
              {user && user.username}
            </h1>
            <p className="text-center text-sm text-gray-400 font-medium">
              Dresseur pokémon
            </p>
            <p>
              <span></span>
            </p>
            <div className="my-5">
              <a
                href="#"
                className="text-indigo-200 block text-center font-medium leading-6 px-6 py-3 bg-indigo-600"
              >
                Connect with <span className="font-bold">@eduardpantazi</span>
              </a>
            </div>

            <div className="w-full flex flex-col items-center">
              <h3 className="font-bold text-gray-600 text-left px-4">
                Recent catch
              </h3>
              <div className="mt-5 w-full">
                {user.pokemon &&
                  user.pokemon.map((pokemon, index) => {
                    return (
                      <EspaceDresseurPokemon
                        key={index}
                        id={pokemon.pokeId}
                        user={user}
                      />
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EspaceDresseur;
