import PokemonListItem from "./PokemonListItem";

export default function PokemonList({ pokemons }) {
  return (
    <div>
      {pokemons?.map((pokemon, i) => (
        <PokemonListItem key={i} {...pokemon} />
      ))}
    </div>
  );
}
