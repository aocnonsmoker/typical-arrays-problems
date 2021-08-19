
exports.min = function min (array) {
  let minNumber = 0;
  if (array === undefined || array.length === 0) {
    return minNumber;
  }
  array.forEach((number) => {
    if (minNumber >= number) {
      minNumber = number
    }
  })
  return minNumber;
}

exports.max = function max (array) {
  let maxNumber = 0;
  if (array === undefined || array.length === 0) {
    return maxNumber;
  }
  array.forEach((number) => {
    if (number >= maxNumber) {
      maxNumber = number;
    }
  })
  return maxNumber;
}

exports.avg = function avg (array) {
  let average = 0;
  if (array === undefined || array.length === 0) {
    return average;
  }
  array.forEach((number) => {
    average += number;
  });
  return average / array.length;
}
