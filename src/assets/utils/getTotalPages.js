function getTotalPages(pokemonList, limit = 20) {
  return Math.ceil(pokemonList.length / limit);
}

export default getTotalPages;
