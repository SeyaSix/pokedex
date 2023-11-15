import Header from "../components/Header";
import pokemonsList from "../components/pokemons";

function TypeWater() {
    const waterPokemons = pokemonsList.filter((pokemon) =>
      pokemon.types.includes("water")
    );
  
    return (
      <>
        <Header />
        <div className="pokemonTeam">
          {waterPokemons.map((pokemon) => (
            <div key={pokemon.id}>
              <h2>{pokemon.name}</h2>
              <img src={pokemon.img} alt={pokemon.name} />
              <p>{pokemon.types.join(", ")}</p>
              <p>{pokemon.isInTeam ? "In Team" : "Not In Team"}</p>
            </div>
          ))}
        </div>
      </>
    );
  }
  

export default TypeWater;