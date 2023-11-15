import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import pokemonsList from "../components/pokemons";

function Home() {
  let navigate = useNavigate();
  function getIsInTeam() {
    return pokemonsList.filter((pokemon) => pokemon.isInTeam === true);
  }
  function openPokemonPage(pokemonid) {
    navigate(`/pokemon/${pokemonid}`); // ou navigate ("/pokemon/" + pokemonid)
  }
  function openTypePage(type) {
    navigate(`/type/${type}`);
  }
  return (
    <>
      <Header />

      <main>
        <h2>Equipe Jaune</h2>
        {getIsInTeam().map((pokemon) => (
          <div
            key={pokemon.id}
            className="pokemonTeam"
            
          >
            <p onClick={() => openPokemonPage(pokemon.id)}>{pokemon.name}</p>
            <img src={pokemon.img} alt="" />
            <p onClick={() => openTypePage(pokemon.types[0])}>{pokemon.types[0]}</p>
          </div>
        ))}

      </main>
    </>
  );
}

export default Home;
