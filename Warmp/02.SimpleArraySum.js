function simpleArraySum(ar) {
  // let total = 0
  // for (let i of ar) {
  //     total +=i
  // }
  // return total
  return ar.reduce((acc, curVal) => acc + curVal);
}

simpleArraySum([1, 2, 3, 4, 10, 11]);
