import PokemonProvider from "./Context/Pokemon/Provider";
import Routers from "./Routes";

function App() {
  return (
    <PokemonProvider>
      <Routers />
    </PokemonProvider>
  );
}

export default App;
