'use strict';

const scoreThrows = (array) => {
  // input validation
  if (!Array.isArray(array)) {
    return 'scoreThrows expected an array';
  } else if (!array.length) {
    return -1;
  }

  // score validation
  const invalidScores = array.filter(x => { return x > 20 });
  const invalidType = array.filter(x => { return typeof x !== 'number' });

  if (invalidScores.length) {
    return 'One of your scores was greater than 20';
  } else if (invalidType.length) {
    return 'scoreThrows expected numbers as scores';
  }
  
  let points = 0;

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

module.exports = scoreThrows;
