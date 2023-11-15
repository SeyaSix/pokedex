import Header from "../components/Header";
import pokemonsList from "../components/pokemons";


function PokemonTypePage(type) {
    const filteredPokemons = pokemonsList.filter((pokemon) =>
      pokemon.types.includes(type)
    );
    return (
      <>
      <Header />
      <main>
        <h2>Pokémons de type {type}</h2>
        {filteredPokemons.map((pokemon) => (
          <div key={pokemon.types}>
            <p>{pokemon.name}</p>
            <img src={pokemon.img} alt="" />
            <p>{pokemon.types.join(", ")}</p>
          </div>
        ))}
      </main>
    </>
  
    )
  }
  
  export default PokemonTypePage;