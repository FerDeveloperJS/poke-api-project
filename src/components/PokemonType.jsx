function PokemonType({ text, bgColor }) {
  return (
    <div
      className="p-2 w-[124px] flex justify-center items-center rounded text-white font-bold mx-1"
      style={{ backgroundColor: bgColor }}
    >
      {text}
    </div>
  );
}

export default PokemonType;
