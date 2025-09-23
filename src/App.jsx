import FilterButton from "./components/FilterButton";
import PopUpFilter from "./components/PopUpFilter";
import { useEffect, useState } from "react";
import PokemonCard from "./components/PokemonCard";
import Overlay from "./components/Overlay";
import Pokemon from "./Classes/Pokemon";
import PaginationSelect from "./components/PaginationSelect";

function App() {
  const [popUp, setPopUp] = useState(false);
  const [actualURL, setActualURL] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [pokemonArray, setPokemonArray] = useState([]);

  useEffect(() => {
    fetch(actualURL)
      .then((res) => res.json())
      .then((data) => {
        let pokemonList;

        if (data.results) {
          pokemonList = data.results;
        } else {
          pokemonList = data.pokemon.map((p) => p.pokemon);
        }

        Promise.all(
          pokemonList.map((pokemon) =>
            fetch(pokemon.url).then((res) => res.json())
          )
        ).then((details) => {
          const pokemons = details.map((data) => {
            let type1 = data.types[0].type.name.toUpperCase();
            let type2;
            if (data.types.length === 2) {
              type2 = data.types[1].type.name.toUpperCase();
            }

            return new Pokemon(
              data.name,
              data.sprites.other["official-artwork"].front_default,
              data.id,
              data.weight,
              data.height,
              type1,
              type2
            );
          });
          setPokemonArray(pokemons);
        });
      });
  }, [actualURL]);

  return (
    <div className="bg-[#2C3152] p-2.5 pb-20">
      <h1
        id="main-title"
        className="font-[Pokemon] text-[#FFCB05] w-fit text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mx-auto mb-8 md:mb-12 lg:mb-16 xl:mb-20"
      >
        Pokedex By Fer
      </h1>
      <FilterButton setPopUp={setPopUp} />
      {popUp && (
        <div>
          <Overlay />
          <PopUpFilter setPopUp={setPopUp} setActualURL={setActualURL} />
        </div>
      )}

      <div className="mt-10 flex justify-around flex-wrap gap-5 gap-y-16">
        {pokemonArray.map((pokemon) => (
          <PokemonCard
            key={pokemon.number}
            name={pokemon.name}
            image={pokemon.image}
            number={pokemon.number}
            weight={pokemon.weight}
            height={pokemon.height}
            type1={pokemon.type1}
            type2={pokemon.type2}
          />
        ))}
      </div>

      <PaginationSelect setActualURL={setActualURL} />
    </div>
  );
}

export default App;
