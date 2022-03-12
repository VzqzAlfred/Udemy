import { useContext } from "react";
import PokemonContext from "./index";
import APICall from "../../API";
import { useState } from "react";

export default function PokemonProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonDetail, setPokemonDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const getPokemons = async () => {
    try {
      setIsLoading(true);
      const pokemonsResult = await APICall({
        url: "https://pokeapi.co/api/v2/pokemon?limit=100",
      });
      setPokemons(pokemonsResult.results);
    } catch (error) {
      setPokemons([]);
    } finally {
      setIsLoading(false);
    }
  };

  const getPokemonDetail = async (id) => {
    if (!id) Promise.reject("ID es requerido.");
    try {
      setIsLoading(!true);
      const pokemonDetail = await APICall({
        url: `https://pokeapi.co/api/v2/pokemon/${id}`,
      });
      setPokemonDetail(pokemonDetail);
    } catch (error) {
      setPokemonDetail({});
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <PokemonContext.Provider
      value={{
        getPokemons,
        pokemons,
        getPokemonDetail,
        pokemonDetail,
        isLoading,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
