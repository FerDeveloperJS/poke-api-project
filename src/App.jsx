import FilterButton from "./components/FilterButton";
import PopUpFilter from "./components/PopUpFilter";
import { useEffect, useState } from "react";
import PokemonCard from "./components/PokemonCard";
import Overlay from "./components/Overlay";
import Pokemon from "./Classes/Pokemon";

function App() {
  const [popUp, setPopUp] = useState(false);
  const [pokemonArray, setPokemonArray] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((data) => {
        const pokemonList = data.results;

        Promise.all(
          pokemonList.map((pokemon) =>
            fetch(pokemon.url).then((res) => res.json())
          )
        ).then((details) => {
          const pokemons = details.map(
            (data) =>
              new Pokemon(
                data.name,
                data.sprites.other["official-artwork"].front_default,
                data.id,
                data.weight,
                data.height
              )
          );
          setPokemonArray(pokemons);
        });
      });
  }, []);

  return (
    <div className="bg-[#2C3152] p-2.5">
      <h1 className="font-[Pokemon] text-[#FFCB05] w-fit text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mx-auto mb-8 md:mb-12 lg:mb-16 xl:mb-20">
        Pokedex By Fer
      </h1>
      <FilterButton setPopUp={setPopUp} />
      {popUp && (
        <div>
          <Overlay />
          <PopUpFilter setPopUp={setPopUp} />
        </div>
      )}

      <div className="mt-10 flex justify-around flex-wrap gap-5 gap-y-16">
        {pokemonArray.map((pokemon) => (
          <PokemonCard
            name={pokemon.name}
            image={pokemon.image}
            number={pokemon.number}
            weight={pokemon.weight}
            height={pokemon.height}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
