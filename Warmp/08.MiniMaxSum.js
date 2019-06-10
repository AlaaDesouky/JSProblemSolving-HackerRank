// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
  let minNum = Infinity;
  let maxNum = 0;

  for (let i = 0; i < arr.length; i++) {
    let sum = 0;
    let newArr = arr.filter((num, index) => i !== index);
    for (let j of newArr) {
      sum += j;
    }
    maxNum = maxNum < sum ? sum : maxNum;
    minNum = minNum > sum ? sum : minNum;
  }
  console.log(minNum, maxNum);
}

miniMaxSum([1, 2, 3, 4, 5]);
miniMaxSum([5, 5, 5, 5, 5]);
