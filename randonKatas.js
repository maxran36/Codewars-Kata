// // 10 -65
// // let sum = 0;
// // const array = [1, 1];
// // // for (let i = 1; i < array.length + 1; i++) {
// // // sum.push(i);
// // // console.log(i);
// // //}

// // sum = array.reduce((a, b) => a + b, 0);
// function countPositivesSumNegatives(input) {
//   let posArr = [];
//   let negSum = 0;
//   let resultArr = [];
//   let empty = [];
//   if () {
//     return empty;
//   } else {
//     for (let i = 0; i < input.length; i++) {
//       //NEGATIVE NUMBERS SUM THEM

//       if (input[i] <= 0) {
//         negSum += input[i];

//         // POSITIVE NUMBERS COUNT THEM
//       } else if (input[i] >= 0) {
//         posArr.push(i);
//       }
//     }
//     resultArr.push(posArr.length, negSum);

//     return resultArr;
//   }
// }
// console.log(countPositivesSumNegatives([]));

// // Should equal [ 8, -50]
// //console.log(input.reduce((a, b) => a + b, 0));
// // let t = [];
// // console.log(t[0]);
// // if (t[0] === undefined)
// //   console.log("fsdafads");

// function loveFunction(flower1, flower2) {
//   let odd1 = flower1 % 2 === 0;
//   let odd2 = flower2 % 2 === 0;
//   return odd1 !== odd2;
// }

// console.log(loveFunction(0, 0));
// function getDiscount(total) {
//   return total >= 100 ? 0.2 : 0;
// }
// let subtotal = 120;
// let discount = getDiscount(subtotal);
// let total = subtotal - subtotal * discount;

// console.log(total);

// function findShort(s) {
//   let strings = s.split(" ");
//   let sLength = [];
//   for (let i = 0; i < strings.length; i++) {
//     sLength.push(strings[i].length);
//   }
//   return Math.min(...sLength);
// }
// console.log(
//   findShort(
//     "turns out random test cases are easier than writing out basic ones"
//   )
// );
// var number = function (array) {
//   let answer = [];
//   if (typeof array[0] !== "string") {
//     return array;
//   } else {
//     for (let i = 0; i < array.length; i++) {
//       answer.push(i + 1 + ": " + array[i]);
//     }
//   }
//   return answer;
// };

// console.log(number(["a", "b", "c", "d"]));
// function maskify(cc) {
//   let ccWords = cc.slice(-4);
//   let xWords = [];
//   for (let i = 0; i < cc.length - 4; i++) {
//     xWords.push("#");
//   }
//   xWords = xWords.join("");

//   return xWords.concat(ccWords);
// }
// console.log(maskify("9"));
// function validatePIN(pin) {
//   //gconsole.log(pin.length + typeof pin);
//   return (
//     (pin.length === 6 &&
//       typeof pin !== "NaN" &&
//       parseInt(pin) >= 0 &&
//       /^\d+$/.test(pin)) ||
//     (pin.length === 4 &&
//       typeof pin !== "NaN" &&
//       parseInt(pin) >= 0 &&
//       /^\d+$/.test(pin))
//   );
// }

// console.log(validatePIN("1234.0"));
// Write a function parseFirstInt that takes a string and returns the first integer present in the string. If the string does not contain an integer, you should get NaN.

// Example: parseFirstInt('No. 10') should return 10 and parseFirstInt('Babylon') should return NaN.
// function parseFirstInt(str) {
//   let arr = [];
//   let i = 0;
//   while (!Number.isNaN(parseInt(str[i]))) {
//     arr.push(str[i]);
//   }
//   return parseInt(arr.join(""));
// }

//
// console.log(parseInt(19.23));
// let date = "31-10-2017";
// let parts = date.split("-");
// let day = parts[0]; // '31'
// let month = parts[1]; // '10'
// let year = parts[2]; // '2017'
// console.log(parts);
// function add(str) {
//   let numSplit = str.split("+");
//   let sum = 0;
//   for (let i = 0; i < numSplit.length; i++) {
//     sum += parseInt(numSplit[i]);
//   }
//   return sum;
// }
// console.log(add("7+12+100"));

// function getCount(str) {
//   let vCount = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str.charAt(i) === "a" ||
//       str.charAt(i) === "e" ||
//       str.charAt(i) === "i" ||
//       str.charAt(i) === "o" ||
//       str.charAt(i) === "u"
//     ) {
//       vCount += 1;
//     }
//   }
//   console.log(vCount);
//   return vCount;
// }
// console.log(getCount("msteeauuuuuuuuuu"));
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

//First level 6 Kata

// function squareDigits(num) {
//   const array = Array.from(String(num));
//   let sqArray = [];
//   for (let i = 0; i < array.length; i++) {
//     sqArray.push(Math.pow(array[i], 2));
//   }
//   return parseInt(sqArray.join(""));
// }
//console.log(squareDigits(765));

// const arr = [1, 2, 3, 4, 5, 3, 3, 3, 3, 3];
// const countMap = {};

// for (let i = 0; i < arr.length; i++) {
//   const num = arr[i];
//   countMap[num] = (countMap[num] || 0) + 1;
// }
// console.log(countMap);

// const arr = [1, 2, 3, -4, -5, 6];
// let index = -1;
// // let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < 0) {
//     index = i;
//     break;
//   }
// }
// //   sum += arr[i];

// console.log(index);

// function high(x) {
//   let result = 0;
//   let letterArray = [];
//   let charCode;
//   letterArray = x.split(" ");

//   console.log(letterArray);
//   for (let i = 0; i < x.length; i++) {
//     if (x.charCodeAt(i) >= 97 && x.charCodeAt(i) <= 122) {
//       charCode = x.charCodeAt(i) - 96;
//       result += charCode;
//     }
//   }
//   return result;
// }
// console.log(high("abc abcd"));
// const strArray = "aa aa";
// let splitArray = strArray.split(" ");
// let countArray = [];

// splitArray = String(splitArray);
// // console.log(typeof splitArray);
// // console.log(typeof strArray);
// for (let i = 0; i < splitArray.length; i++) {
//   countArray.push(splitArray.charCodeAt(i) - 96);
// }
// //console.log(countArray.slice(0, 3));

// let newArray = countArray.filter((val) => val > 0);
// console.log(countArray);
// let sum = 0;
// let sum2 = 0;
// countArray.reduce((acc, num) => {
//   if (num > 0) {
//     sum += num;
//   } else sum2 += num;
// }, 0);
// console.log(sum);
