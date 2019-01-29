const scoreThrows = (array) => {
  let points = 0;

  // if all throws are < 5 then add 100 to points:
  const lessThanFive = array.filter(x => { return x < 5 });

  if (lessThanFive.length === array.length) {
    points += 100;
  }

  const calcPoints = array.reduce((sum, x) => {
    console.log(array);
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
