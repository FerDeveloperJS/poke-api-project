import SearchSvg from "../assets/svg/SearchSvg";

function SearchSpecificPokemon({
  setSpecificPokemonBySearchURL,
  setSpecificPokemonBySearch,
}) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const pokemonName = e.target.value.toLowerCase();
      const specificPokemonBySearchURL = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
      setSpecificPokemonBySearchURL(specificPokemonBySearchURL);
      setSpecificPokemonBySearch(true);
    }
  };

  return (
    <div className="relative mx-auto w-fit flex bg-black p-2.5 gap-3.5 rounded-2xl mb-3.5">
      <SearchSvg />
      <input
        type="text"
        placeholder="Buscar Pokemon"
        className="bg-black block text-white placeholder-white text-2xl w-52"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default SearchSpecificPokemon;
