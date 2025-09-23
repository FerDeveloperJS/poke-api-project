import PokemonType from "./PokemonType";

function PokemonCard({ name, image, number, weight, height, type1, type2 }) {
  return (
    <div className="p-2.5 relative flex flex-col items-center mt-16 rounded-[60px] bg-[#343D64] min-w-[300px] max-w-[400px]">
      <img
        src={image}
        className="absolute h-[121px] md:h-[140px] w-[121px] md:w-[140px] left-1/2 -translate-x-1/2 -top-20"
      />
      <h4 className="text-white text-2xl md:text-3xl absolute top-0 left-0">
        {number}
      </h4>

      <h3 className="font-[CascadiaCode] text-white text-3xl md:text-4xl font-black mt-8 md:mt-14 mb-4">
        {name}
      </h3>

      <div className="w-full flex justify-center flex-wrap mb-5">
        <PokemonType text={type1} />
        <PokemonType text={type2} />
      </div>

      <div className="flex w-full justify-around">
        <div className="w-fit flex flex-col items-center">
          <p className="text-white text-xl md:text-2xl w-fit font-[CascadiaCode] font-black">
            Peso
          </p>
          <p className="w-fit text-[#E6B71E] font-bold text-lg md:text-xl">
            {weight}
          </p>
        </div>

        <div className="w-fit flex flex-col items-center">
          <p className="text-white text-xl md:text-2xl w-fit font-[CascadiaCode] font-black">
            Altura
          </p>
          <p className="w-fit text-[#E6B71E] font-bold text-lg md:text-xl">
            {height}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
