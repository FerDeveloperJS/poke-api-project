function getPokemonsByPage(pokemonList, page, limit = 20) {
  const start = (page - 1) * limit;
  const end = page * limit;
  return pokemonList.slice(start, end);
}

export default getPokemonsByPage;
