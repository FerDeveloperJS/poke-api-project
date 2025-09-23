function convertWeight(hectograms) {
  const kilograms = hectograms / 10;
  const pounds = (kilograms * 2.20462).toFixed(1);
  return `${pounds} lbs`;
}

export default convertWeight;
