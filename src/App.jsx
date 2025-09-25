import FilterButton from "./components/FilterButton";
import PopUpFilter from "./components/PopUpFilter";
import { useEffect, useState } from "react";
import PokemonCard from "./components/PokemonCard";
import Overlay from "./components/Overlay";
import Pokemon from "./Classes/Pokemon";
import PaginationSelect from "./components/PaginationSelect";
import convertHeight from "./assets/utils/ConvertHeight";
import convertWeight from "./assets/utils/ConvertWeight";
import getPokemonsByPage from "./assets/utils/getPokemonsByPage";
import getTotalPages from "./assets/utils/getTotalPages";
import RemoveFilterButton from "./components/RemoveFilterButton";
import PaginationSelectByType from "./components/PaginationSelectByType";

function App() {
  const [popUp, setPopUp] = useState(false);
  const [actualURL, setActualURL] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [pokemonArray, setPokemonArray] = useState([]);
  const [filter, setFilter] = useState(false);
  const [totalPagesByFilter, setTotalPagesByFilter] = useState(1);
  const [actualPageByFilter, setActualPageByFilter] = useState(1);

  useEffect(() => {
    fetch(actualURL)
      .then((res) => res.json())
      .then((data) => {
        let pokemonList;

        if (data.results) {
          pokemonList = data.results;
        } else {
          const fullList = data.pokemon.map((p) => p.pokemon);
          pokemonList = getPokemonsByPage(fullList, actualPageByFilter);
          const totalPages = getTotalPages(fullList);
          setTotalPagesByFilter(totalPages);
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
            const convertedWeight = convertWeight(data.weight);
            const convertedHeight = convertHeight(data.height);

            return new Pokemon(
              data.name,
              data.sprites.other["official-artwork"].front_default,
              data.id,
              convertedWeight,
              convertedHeight,
              type1,
              type2
            );
          });
          setPokemonArray(pokemons);
        });
      });
  }, [actualURL]);

  useEffect(() => {
    fetch(actualURL)
      .then((res) => res.json())
      .then((data) => {
        const fullList = data.pokemon.map((p) => p.pokemon);
        const pokemonList = getPokemonsByPage(fullList, actualPageByFilter);

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
            const convertedWeight = convertWeight(data.weight);
            const convertedHeight = convertHeight(data.height);

            return new Pokemon(
              data.name,
              data.sprites.other["official-artwork"].front_default,
              data.id,
              convertedWeight,
              convertedHeight,
              type1,
              type2
            );
          });
          setPokemonArray(pokemons);
        });
      });
  }, [actualPageByFilter]);

  return (
    <div className="bg-[#2C3152] p-2.5 pb-20">
      <h1
        id="main-title"
        className="font-[Pokemon] text-[#FFCB05] w-fit text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mx-auto mb-8 md:mb-12 lg:mb-16 xl:mb-20"
      >
        Pokedex By Fer
      </h1>

      {filter === false && <FilterButton setPopUp={setPopUp} />}
      {filter && <RemoveFilterButton />}
      {popUp && (
        <div>
          <Overlay />
          <PopUpFilter
            setPopUp={setPopUp}
            setActualURL={setActualURL}
            setFilter={setFilter}
          />
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

      {filter === false && <PaginationSelect setActualURL={setActualURL} />}
      {filter && (
        <PaginationSelectByType
          numberOfPages={totalPagesByFilter}
          actualPageByFilter={actualPageByFilter}
          setActualPageByFilter={setActualPageByFilter}
        />
      )}
    </div>
  );
}

export default App;
