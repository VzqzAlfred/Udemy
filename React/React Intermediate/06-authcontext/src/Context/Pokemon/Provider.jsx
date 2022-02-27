import { useContext } from "react";
import PokemonContext from "./index";
import APICall from "../../API";
import { useState } from "react";

export default function PokemonProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);
  const getPokemons = async () => {
    try {
      const pokemonsResult = await APICall({
        url: "https://pokeapi.co/api/v2/pokemon?limit=100",
      });
      setPokemons(pokemonsResult.results);
    } catch (error) {
      setPokemons([]);
    }
  };
  return (
    <PokemonContext.Provider value={{ getPokemons, pokemons }}>
      {children}
    </PokemonContext.Provider>
  );
}
