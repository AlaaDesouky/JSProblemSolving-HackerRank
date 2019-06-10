// // Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
  let tallestCandle = ar[0];
  for (let candle of ar) {
    tallestCandle = tallestCandle < candle ? candle : tallestCandle;
  }
  let numOfCandles = ar.filter(c => c === tallestCandle);
  console.log(numOfCandles.length);
}

birthdayCakeCandles([3, 2, 1, 3]);
