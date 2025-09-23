import pokemonTypeArray from "../assets/utils/PokemonTypeArray";

function PokemonType({ text }) {
  const type = pokemonTypeArray.find((t) => t.text === text);

  if (!type) return null;

  return (
    <div
      className="p-2 w-[120px] flex justify-center items-center rounded text-white font-bold mx-1"
      style={{ backgroundColor: type.bgColor }}
    >
      {type.text}
    </div>
  );
}

export default PokemonType;
