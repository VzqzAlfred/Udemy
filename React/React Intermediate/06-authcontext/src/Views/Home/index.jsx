import React, { useEffect } from "react";
import { useContext } from "react";
import PokemonContext from "../../Context/Pokemon";
import PokemonList from "./Components/PokemonList";

export function Home() {
  const { getPokemons, pokemons } = useContext(PokemonContext);

  useEffect(() => {
    getPokemons().catch(null);
  }, []);

  return (
    <div>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}
