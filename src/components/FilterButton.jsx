import { useState } from "react";
import FilterSvg from "../assets/svg/FilterSvg";

function FilterButton({ setPopUp }) {
  return (
    <button
      className="flex mx-auto rounded-xl w-fit p-1 px-2 justify-center items-center gap-1.5 bg-black text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl"
      onClick={() => setPopUp(true)}
    >
      Filtrar <FilterSvg />
    </button>
  );
}

export default FilterButton;
