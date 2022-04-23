import { useParams } from "react-router-dom";
//import { useContext } from "react/cjs/react.development";
import { useEffect } from "react/cjs/react.development";
import Error from "../../Components/Error";
import { Loading } from "../../Components/Loading";
//import PokemonContext from "../../Context/Pokemon";
import PokeStats from "./Components/PokeStats";
import usePokemonsStore from "../../Zustand/Stores/pokemons";

export default function PokeDetail() {
  const { id } = useParams();
  //  const { getPokemonDetail, pokemonDetail, isLoading, hasError, errorMessage } =useContext(PokemonContext);
  const { getPokemonDetail, pokemonDetail, isLoading, hasError, errorMessage } =
    usePokemonsStore((state) => ({
      getPokemonDetail: state.getPokemonDetail,
      pokemonDetail: state.pokemonDetail,
      isLoading: state.isLoading,
      hasError: state.hasError,
      errorMessage: state.errorMessage,
    }));

  useEffect(() => {
    /*
          Cada que se cargue la pantalla o cada que cambie el id, solicitar el det5alle del pokemon
     */

    getPokemonDetail(id).catch(null);
  }, []);

  if (isLoading) {
    return <Loading title="Cargando pokemon" />;
  }

  return (
    <>
      {hasError ? (
        <Error message="Something is bad" />
      ) : (
        <div>
          <h3 style={{ marginTop: 15, marginBottom: 15 }}>About the Pokemon</h3>

          <p>{"Name: " + pokemonDetail?.name}</p>
          <p>{"Weight: " + pokemonDetail?.weight + " gr"}</p>
          <p>{"Height: " + pokemonDetail?.height}</p>
          <div>
            <h3 style={{ marginTop: 30, marginBottom: 15 }}>Habilities</h3>
            <PokeStats stats={pokemonDetail?.stats ?? []} />
          </div>
        </div>
      )}
    </>
  );
}
