import React, { useEffect } from "react";
import { useContext } from "react";
import Error from "../../Components/Error";
import { Loading } from "../../Components/Loading";
import PokemonContext from "../../Context/Pokemon";
import PokemonList from "./Components/PokemonList";

export function Home() {
  const { getPokemons, pokemons, isLoading, hasError, errorMessage } =
    useContext(PokemonContext);

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
