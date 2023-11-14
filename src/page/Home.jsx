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
  return (
    <>
      <Header />

      <main>
        <h2>Equipe Jaune</h2>
        {getIsInTeam().map((pokemon) => (
          <div
            key={pokemon.id}
            className="pokemonTeam"
            onClick={()=>openPokemonPage(pokemon.id)}
          >
            <p>{pokemon.name}</p>
            <img src={pokemon.img} alt="" />
            <p>{pokemon.types}</p>
          </div>
        ))}
      </main>
    </>
  );
}

export default Home;
