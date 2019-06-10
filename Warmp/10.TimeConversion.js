// Complete the timeConversion function below.
function timeConversion(s) {
  let newStr = s.slice(0, -2);
  if (s.includes("PM")) {
    newStr = s.includes("12")
      ? newStr
      : newStr.replace(s.slice(0, 2), Number(s.slice(0, 2)) + 12);
  } else if (s.includes("AM")) {
    newStr = s.includes("12") ? newStr.replace(s.slice(0, 2), "00") : newStr;
  }
  return newStr;
}

timeConversion("08:05:45PM");
timeConversion("07:05:45AM");
timeConversion("12:05:45AM");
timeConversion("12:05:45PM");
