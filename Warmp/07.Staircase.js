// Complete the staircase function below.
function staircase(n) {
  let space = " ";
  let hash = "#";
  for (let i = 1; i <= n; i++) {
    console.log(space.repeat(n - i) + hash.repeat(i));
  }
}

staircase(6);
