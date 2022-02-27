import React, { useContext } from "react";
import PokemonContext from "../../Context/Pokemon";

export function FourOFour() {
  const { pokemons } = useContext(PokemonContext);
  console.log(pokemons);
  return (
    <div>
      <p>Sorry, page not found!</p>
    </div>
  );
}
