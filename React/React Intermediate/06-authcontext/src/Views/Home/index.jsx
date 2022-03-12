import React, { useEffect } from "react";
import { useContext } from "react";
import PokemonContext from "../../Context/Pokemon";
import PokemonList from "./Components/PokemonList";

export function Home() {
  const { getPokemons, pokemons, isLoading } = useContext(PokemonContext);

  useEffect(() => {
    getPokemons().catch(null);
  }, []);

  if (isLoading) {
    return <p>Loading Results</p>;
  }

  return (
    <div>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}
