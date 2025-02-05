/**
 * Rounds up to the nearest 0.05
 * @param {number} number ex. 54.625
 * @returns {number} rounded number, ex. 54.65
 */
const roundToNearest05 = (number) => {
  // Round and remove digits after second decimal place
  const times100 = Math.round(number * 100);

  const nearest5 = Math.round(times100 / 5) * 5;

  return nearest5 / 100;
};

/**
 * Rounds up to the nearest 0.01
 * @param {number} number ex. 54.625
 * @returns {number} rounded number, ex. 54.63
 */
const roundTo2DecimalPlaces = (number) => {
  return Math.round(number * 100) / 100;
};

module.exports = {
  roundToNearest05,
  roundTo2DecimalPlaces,
};
