import PokemonType from "./PokemonType";
import CloseSvg from "../assets/svg/CloseSvg";

function PopUpFilter({ setPopUp }) {
  const pokemonTypeArray = [
    { text: "NORMAL", bgColor: "#A8A77A" },
    { text: "FIRE", bgColor: "#EE8130" },
    { text: "WATER", bgColor: "#6390F0" },
    { text: "ELECTRIC", bgColor: "#F7D02C" },
    { text: "GRASS", bgColor: "#7AC74C" },
    { text: "ICE", bgColor: "#96D9D6" },
    { text: "FIGHTING", bgColor: "#C22E28" },
    { text: "POISON", bgColor: "#A33EA1" },
    { text: "GROUND", bgColor: "#E2BF65" },
    { text: "FLYING", bgColor: "#A98FF3" },
    { text: "PSYCHIC", bgColor: "#F95587" },
    { text: "BUG", bgColor: "#A6B91A" },
    { text: "ROCK", bgColor: "#B6A136" },
    { text: "GHOST", bgColor: "#735797" },
    { text: "DRAGON", bgColor: "#6F35FC" },
    { text: "DARK", bgColor: "#705746" },
    { text: "STEEL", bgColor: "#B7B7CE" },
    { text: "FAIRY", bgColor: "#D685AD" },
  ];
  return (
    <div className="fixed z-20 top-0 left-1/2 -translate-x-1/2 py-10 rounded-2xl bg-white max-w-[700px] mx-auto">
      <h2 className="text-[#FFCB05] font-[Onest] font-bold text-2xl md:text-4xl text-center mb-10">
        Filtro por tipo
      </h2>
      <ul className="flex flex-wrap gap-5 justify-center">
        {pokemonTypeArray.map((pokemonType) => {
          return (
            <li key={pokemonType.text}>
              <PokemonType
                text={pokemonType.text}
                bgColor={pokemonType.bgColor}
              />
            </li>
          );
        })}
      </ul>
      <CloseSvg setPopUp={setPopUp} />
    </div>
  );
}

export default PopUpFilter;
