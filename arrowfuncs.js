function double(arr) {
  return arr.map((val) => {
    return val * 2;
  });
}

const double = (arr) => arr.map((val) => val * 2);

const squareAndFindEvens = (numbers) =>
  numbers.map((val) => val ** 2).filter((square) => square % 2 === 0);
