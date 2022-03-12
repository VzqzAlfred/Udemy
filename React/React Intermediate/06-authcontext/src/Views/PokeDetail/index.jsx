import { useParams } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { useEffect } from "react/cjs/react.development";
import PokemonContext from "../../Context/Pokemon";
export default function PokeDetail() {
  const { id } = useParams();
  const { getPokemonDetail, pokemonDetail, isLoading } =
    useContext(PokemonContext);

  useEffect(() => {
    /*
          Cada que se cargue la pantalla o cada que cambie el id, solicitar el det5alle del pokemon
     */

    getPokemonDetail(id).catch(null);
  }, []);

  if (isLoading) {
    return <p>Cargando pokemon...</p>;
  }

  return (
    <div>
      <p>{"Name: " + pokemonDetail?.name}</p>
      <p>{"Weight: " + pokemonDetail?.weight + " gr"}</p>
      <p>{"Height: " + pokemonDetail?.height}</p>
    </div>
  );
}
