function convertHeight(decimeters) {
  const inchesTotal = decimeters * 0.1 * 39.3701;
  const feet = Math.floor(inchesTotal / 12);
  const inchesRemaining = Math.round(inchesTotal % 12);

  return `${feet}’ ${inchesRemaining}’’`;
}

export default convertHeight;
