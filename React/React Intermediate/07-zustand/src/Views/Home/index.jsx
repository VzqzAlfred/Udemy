import React, { useEffect } from "react";
import { useContext } from "react";
import Error from "../../Components/Error";
import { Loading } from "../../Components/Loading";
//import PokemonContext from "../../Context/Pokemon";
import PokemonList from "./Components/PokemonList";
import usePokemonsStore from "../../Zustand/Stores/pokemons";
import shallow from "zustand/shallow";

export function Home() {
  // const { getPokemons, pokemons, isLoading, hasError, errorMessage } =useContext(PokemonContext);

  const { getPokemons, pokemons, isLoading, hasError, errorMessage } =
    usePokemonsStore(
      (state) => ({
        getPokemons: state.getPokemons,
        pokemons: state.pokemons,
        isLoading: state.isLoading,
        hasError: state.hasError,
        errorMessage: state.errorMessage,
      }),
      shallow
    );

  useEffect(() => {
    getPokemons().catch(null);
  }, []);

  if (isLoading) {
    return <Loading title="Cargando resultados.." />;
  }

  return (
    <>
      {hasError ? (
        <Error message="Something is bad" />
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </>
  );
}
