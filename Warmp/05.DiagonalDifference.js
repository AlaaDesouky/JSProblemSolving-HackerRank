// Complete the diagonalDifference function below.
function diagonalDifference(arr) {
  let firstSum = 0;
  let secondSum = 0;
  for (let i = 0; i < arr.length; i++) {
    firstSum += arr[i][i];
    secondSum += arr[i][arr.length - 1 - i];
  }
  return Math.abs(firstSum - secondSum);
}

diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]);
