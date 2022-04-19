import { useContext } from "react";
import PokemonContext from "./index";
import APICall from "../../API";
import { useState } from "react";

export default function PokemonProvider({ children }) {
  const [pokemons, setPokemons] = useState([]);
  const [pokemonDetail, setPokemonDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const getPokemons = async () => {
    try {
      setIsLoading(true);
      setErrorMessage("");
      setHasError(false);
      const pokemonsResult = await APICall({
        url: "https://pokeapi.co/api/v2/pokemon?limit=100",
      });
      setPokemons(pokemonsResult.results);
    } catch (error) {
      setPokemons([]);
      setErrorMessage("Something is bad :(");
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const getPokemonDetail = async (id) => {
    if (!id) Promise.reject("ID es requerido.");
    try {
      setIsLoading(true);
      setErrorMessage("");
      setHasError(false);
      const pokemonDetail = await APICall({
        url: `https://pokeapi.co/api/v2/pokemon/${id}`,
      });
      setPokemonDetail(pokemonDetail);
    } catch (error) {
      setPokemonDetail({});
      setErrorMessage("Something is bad :(");
      setHasError(true);
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
        errorMessage,
        hasError,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}
