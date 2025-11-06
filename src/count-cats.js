const { NotImplementedError } = require('../lib');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  const matrixToArray = matrix.flat();
  const catCount = matrixToArray.reduce((accumulator, cat) => {
    if (cat === '^^') accumulator++;
    return accumulator;
  }, 0);
  return catCount;
}

module.exports = {
  countCats
};
