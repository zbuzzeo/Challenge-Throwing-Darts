'use strict';

const scoreThrows = (array) => {
  let points = 0;

  if (!Array.isArray(array)) {
    return 'scoreThrows expected an array';
  }

  // if all throws are < 5 then add 100 to points:
  const lessThanFive = array.filter(x => { return x < 5 });

  // compare the length of both arrays to see if all values passed the filter.
  if (lessThanFive.length === array.length) {
    points += 100;
  }

  // reduce all of the values to a sum based on their point-values.
  const calcPoints = array.reduce((sum, x) => {
    if (x <= 10 && x >= 5) {
      sum += 5;
    } else if (x < 5) {
      sum += 10;
    }

    return sum;
  }, 0);

  points += calcPoints;

  return points;
}

console.log(
  scoreThrows([1, 2, 1, 4, 4, 2])
  );

module.exports = scoreThrows;
