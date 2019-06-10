// Complete the compareTriplets function below.
function compareTriplets(a, b) {
  let [x, y] = [0, 0];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i] && a[i] !== b[i]) {
      x += 1;
    } else if (a[i] < b[i] && a[i] !== b[i]) {
      y += 1;
    }
  }
  return [x, y];
}

compareTriplets([17, 28, 30], [99, 16, 8]);
