import PokemonType from "./PokemonType";
import CloseSvg from "../assets/svg/CloseSvg";
import pokemonTypeArray from "../assets/utils/PokemonTypeArray";

function PopUpFilter({ setPopUp }) {
  return (
    <div className="fixed z-20 top-0 left-1/2 -translate-x-1/2 py-10 rounded-2xl bg-white max-w-[700px] mx-auto">
      <h2 className="text-[#FFCB05] font-[Onest] font-bold text-2xl md:text-4xl text-center mb-10">
        Filtro por tipo
      </h2>
      <ul className="flex flex-wrap gap-5 justify-center">
        {pokemonTypeArray.map((pokemonType) => {
          return (
            <li key={pokemonType.text}>
              <PokemonType text={pokemonType.text} />
            </li>
          );
        })}
      </ul>
      <CloseSvg setPopUp={setPopUp} />
    </div>
  );
}

export default PopUpFilter;
