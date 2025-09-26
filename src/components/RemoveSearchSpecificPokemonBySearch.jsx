import FilterSvg from "../assets/svg/FilterSvg";

function RemoveSearchSpecificPokemonBySearch() {
  return (
    <button
      className="flex mx-auto rounded-xl w-fit p-1 px-2 justify-center items-center gap-1.5 bg-black text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
      onClick={() => location.reload()}
    >
      Quitar Busqueda especifica <FilterSvg />
    </button>
  );
}

export default RemoveSearchSpecificPokemonBySearch;
