import { useParams } from "react-router-dom";
import pokemonsList from "../components/pokemons";
import Header from "../components/Header";
import { useEffect, useState } from "react";

function PokemonPage() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  useEffect(() => {
    setPokemon(pokemonsList.find((pokemon) => pokemon.id === Number(id))); //number(id) transform le sting en int
  }, [setPokemon, id]);

  return (
    <>
      <Header />
      {pokemon && (
        <div className="pokemonTeam">
          <p>{pokemon.name}</p>
          <img src={pokemon.img} alt="" />
          <p>{pokemon.types.join(", ")}</p>
        </div>
      )}
    </>
  );
}

export default PokemonPage;
