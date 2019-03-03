'use strict';

const scoreThrows = (array) => {
  if (!Array.isArray(array)) {
    throw new Error('scoreThrows expected an array');
  }

  if (!array.length) {
    return -1;
  }

  if (Math.max(...array) > 20) {
    throw new Error('At least one of your scores was above 20');
  }

  const filtered = array.filter(x => {
    return typeof x === 'number';
  });

  if (filtered.length !== array.length) {
    throw new Error('scoreThrows expected numbers as scores');
  }

  const scoresLessThanTen = array.filter(x => x <= 10);
  let points = 0;

  if (Math.max(...array) < 5) {
    points += 100;
  }

  const calculatedScores = scoresLessThanTen.reduce((sum, score) => {
    if (score <= 10 && score >= 5) {
      sum += 5;
    } else if (score < 5) {
      sum += 10;
    }

    return sum;
  }, 0);

  return points += calculatedScores;
}

module.exports = scoreThrows;