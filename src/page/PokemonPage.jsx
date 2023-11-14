//au click sur le pokemon, ça soit emmener vers la page de détail qui n'affiche que ce pokemon. Tu dois trouver un moyen de créer une seule
//page de détail, mais qu'elle puisse afficher n'importe quel pokemon (on a pas vu ça encore, mais tu peux regarder du côté des parametres de route du react router :
//tu passes l'id du pokemon cliqué en parametre de la route, tu récupères cet id quand t'arrives sur la page de
//détail pour pouvoir récupérer et afficher le pokemon en utilisant la liste des pokemons et en filtrant par id)

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
        <div>
          <p>{pokemon.name}</p>
          <img src={pokemon.img} alt="" />
          <p>{pokemon.types}</p>
        </div>
      )}
    </>
  );
}

export default PokemonPage;
