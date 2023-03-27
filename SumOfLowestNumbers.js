function sumTwoSmallestNumbers(numbers) {
  // const findLow = numbers.indexOf(Math.min(...numbers));
  const low = numbers.indexOf(Math.min(...numbers));
  numbers.splice(indexOf(low), 1);
  // const findLow2 = numbers.indexOf(Math.min(...numbers));
  const low2 = numbers.indexOf(Math.min(...numbers));
  // numbers.splice(findLow2, 1);
  return low + low2;
}
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]));
