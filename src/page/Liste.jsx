import Header from "../components/Header";
import pokemonsList from "../components/pokemons";

function Liste() {
    return (
      <>
        <Header />
        <div className="pokemonTeam">
          {pokemonsList.map((pokemon) => (
            <div key={pokemon.id}>
              <h2>{pokemon.name}</h2>
              <img src={pokemon.img} alt={pokemon.name} />
              <p>{pokemon.types.join(", ")}</p>
            
            </div>
          ))}
        </div>
      </>
    );
  }

export default Liste;