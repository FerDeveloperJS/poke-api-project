import FilterButton from "./components/FilterButton";
import PopUpFilter from "./components/PopUpFilter";
import { useState } from "react";
import Overlay from "./components/Overlay";

function App() {
  const [popUp, setPopUp] = useState(false);
  return (
    <div className="h-[200vh] bg-[#2C3152] p-2.5">
      <h1 className="font-[Pokemon] text-[#FFCB05] w-fit text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mx-auto mb-8 md:mb-12 lg:mb-16 xl:mb-20">
        Pokedex By Fer
      </h1>
      <FilterButton setPopUp={setPopUp} />
      {popUp && (
        <div>
          <Overlay />
          <PopUpFilter setPopUp={setPopUp} />
        </div>
      )}
    </div>
  );
}

export default App;
