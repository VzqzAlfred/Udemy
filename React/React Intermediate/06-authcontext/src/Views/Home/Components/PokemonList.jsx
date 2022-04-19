import PokemonListItem from "./PokemonListItem";

export default function PokemonList({ pokemons }) {
  return (
    <>
      {pokemons?.map((pokemon, i) => (
        <PokemonListItem key={i} {...pokemon} />
      ))}
    </>
  );
}
