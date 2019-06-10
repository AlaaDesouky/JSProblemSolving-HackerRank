// Complete the plusMinus function below.
function plusMinus(arr) {
  let [p, n, z] = [0, 0, 0];
  for (let i of arr) {
    i !== 0 ? (i > 0 ? p++ : n++) : z++;
  }
  return p / arr.length, n / arr.length, z / arr.length;
}

plusMinus([-4, 3, -9, 0, 4, 1]);
