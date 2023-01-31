
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let res = []
  let resultTowelSort = [];

  if (matrix === undefined) {
    return [];
  } else {
    for (let i = 0; i < matrix.length; i++) {
      if (i % 2 === 0) {
        resultTowelSort.push(matrix[i]);
      } else {
        resultTowelSort.push(matrix[i].reverse());
      }
    }
    for (let j = 0; j < resultTowelSort.length; j++) {
      res = res.concat(resultTowelSort[j]);
    }
    return res;
  }
}