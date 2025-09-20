import PokemonType from "./PokemonType";
import CloseSvg from "../assets/svg/CloseSvg";

function PopUpFilter({ setPopUp }) {
  return (
    <div className="fixed z-20 top-0 left-1/2 -translate-x-1/2 py-10 rounded-2xl bg-white max-w-[700px] mx-auto">
      <h2 className="text-[#FFCB05] font-[Onest] font-bold text-2xl md:text-4xl text-center mb-10">
        Filtro por tipo
      </h2>
      <ul className="flex flex-wrap gap-5 justify-center">
        <li>
          <PokemonType text={"NORMAL"} bgColor={"#A8A77A"} />
        </li>
        <li>
          <PokemonType text={"FIRE"} bgColor={"#EE8130"} />
        </li>
        <li>
          <PokemonType text={"WATER"} bgColor={"#6390F0"} />
        </li>
        <li>
          <PokemonType text={"GRASS"} bgColor={"#7AC74C"} />
        </li>
        <li>
          <PokemonType text={"ELECTRIC"} bgColor={"#F7D02C"} />
        </li>
        <li>
          <PokemonType text={"ICE"} bgColor={"#96D9D6"} />
        </li>
        <li>
          <PokemonType text={"FIGTHING"} bgColor={"#C22E28"} />
        </li>
        <li>
          <PokemonType text={"POISON"} bgColor={"#A33EA1"} />
        </li>
        <li>
          <PokemonType text={"GROUND"} bgColor={"#E2BF65"} />
        </li>
        <li>
          <PokemonType text={"FLYING"} bgColor={"#A98FF3"} />
        </li>
        <li>
          <PokemonType text={"PSYCHIC"} bgColor={"#F95587"} />
        </li>
        <li>
          <PokemonType text={"BUG"} bgColor={"#A6B91A"} />
        </li>
        <li>
          <PokemonType text={"ROCK"} bgColor={"#B6A136"} />
        </li>
        <li>
          <PokemonType text={"GHOST"} bgColor={"#735797"} />
        </li>
        <li>
          <PokemonType text={"DRAGON"} bgColor={"#6F35FC"} />
        </li>
        <li>
          <PokemonType text={"DARK"} bgColor={"#705746"} />
        </li>
        <li>
          <PokemonType text={"STEEL"} bgColor={"#B7B7CE"} />
        </li>
        <li>
          <PokemonType text={"FAIRY"} bgColor={"#D685AD"} />
        </li>
      </ul>
      <CloseSvg setPopUp={setPopUp} />
    </div>
  );
}

export default PopUpFilter;
