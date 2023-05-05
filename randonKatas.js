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

// function removeEveryOther(arr) {
//   //your code here
//   let arr2 = [];

//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i] + " need this");
//     arr2.push(arr[i]);
//     arr.splice(i, 1);
//   }
//   return arr2;
// }
// // should return 1, 3, 5, 7, 9
// console.log(removeEveryOther(["a", "b", "c"]));

// function disemvowel(str) {
//   let wordWithoutVowels = [];
//   for (let i = 0; i < str.length; i++) {
//     if (
//       str[i].toLowerCase() !== "a" &&
//       str[i].toLowerCase() !== "e" &&
//       str[i].toLowerCase() !== "i" &&
//       str[i].toLowerCase() !== "o" &&
//       str[i].toLowerCase() !== "u"
//     ) {
//       wordWithoutVowels.push(str[i]);
//     }
//   }
//   return wordWithoutVowels.join("");
// }
// console.log(disemvowel("This eee uu IIII OOOO All"));

// function highAndLow(numbers) {
//   // let min;
//   // let max;
//   // let strToNum;
//   // strToNum = parseInt(numbers);
//   //   min = Math.min(parseInt(numbers));
//   //   max = Math.max(parseInt(numbers));
//   //   console.log(strToNum);
//   // }

//   let numArray2 = [];
//   console.log(numArray);
//   for (let i = 0; i < numArray.length; i++) {

//   }
//   return numArray;
// }

// highAndLow("1 9 3 4 -5"); // return "9 -5"
// function highAndLow(numbers) {
//   let min = Math.min(...numbers.split(" ").map(Number));
//   let max = Math.max(...numbers.split(" ").map(Number));
//   let answer = `${max} ${min} `;
//   answer.toString;
//   return answer;
// }
// console.log(highAndLow("1 9 3 4 -5"));

// let abc = " 1 2 -3";
// let numArr = abc.split(" ").map(Number);
// console.log(Math.min(...numArr));

// function fakeBin(x) {
//   let stringToInt = [];
//   for (let i = 0; i < x.length; i++) {
//     stringToInt.push(parseInt(x[i]));
//   }

//   for (let y = 0; y < stringToInt.length; y++) {
//     if (stringToInt[y] < 5) {
//       stringToInt[y] = 0;
//     } else {
//       stringToInt[y] = 1;
//     }
//   }
//   return stringToInt.join("");
// }
// console.log(fakeBin("14567812"));

// function strCount(str, letter) {
//   let letterCount = 0;
//   str = str.toLowerCase();
//   for (let i = 0; i < str.length; i++) {
//     if (letter === str[i]) {
//       letterCount++;
//     }
//   }
//   return letterCount;
// }
// console.log(strCount("", "h"));

// function wave(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== " ") {
//       // console.log(str.replace(str[i], str[i].toUpperCase()) + i);
//       console.log(str.slice(i + 1));
//       //  console.log(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
//     }
//   }
// }
// wave("upper");

//remove everthing past #

// function removeUrlAnchor(url) {
//   for (let i = 0; i < url.length; i++) {
//     if (url[i] === "#") {
//       url = url.slice(0, i);
//     }
//   }
//   return url;
// }
// console.log(removeUrlAnchor("www.google.com#about"));
// "d", "e", "f", "g", "h", , "i"
// function isPangram(string) {
//   const alpha = Array.from({ length: 26 }, (_, i) =>
//     String.fromCharCode("a".charCodeAt(0) + i)
//   );
//   string = string.toLowerCase();
//   string = string.split("");
//   //console.log(alpha);
//   return alpha.every((element) => string.includes(element));
// }
// //console.log(isPangram("acdefghijklmnopqrstuvwxyz"));
// console.log(isPangram("Cwm fjord bank glyphs vext quiz"));

// const isAnagram = function (test, original) {
//   test = test.toLowerCase().split("").sort().join();
//   original = original.toLowerCase().split("").sort().join();

//   return test.length === original.length && test.includes(original)
//     ? true
//     : false;
// };
// console.log(isAnagram("torBf", "fBotr"));

// var uniqueInOrder = function (iterable) {
//   let newArr = [];

//   for (let i = 0; i < iterable.length; i++) {
//     newArr.push(iterable[i]);
//   }

//   for (let i = 0; i < newArr.length; i++) {
//     if (newArr[i] === newArr[i + 1]) {
//       newArr.splice(i, 1);
//       i--;
//     }
//     console.log("Index of " + i + " -> " + iterable[i]);
//   }
//   return newArr;
// };
// console.log(uniqueInOrder("aabccd"));

// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

// function points(games) {
//   let sum = 0;
//   let newArr = [];
//   games = games.join("").replace(/:/g, "");

//   for (let i = 0; i < games.length; i++) {
//     newArr.push(games[i]);
//   }

//   for (let i = 0; i < newArr.length; i++) {
//     if (newArr[i] > newArr[i + 1]) {
//       sum += 3;
//       i++;
//     } else if (newArr[i] < newArr[i + 1]) {
//       sum += 0;
//       i++;
//     } else if (newArr[i] === newArr[i + 1]) {
//       sum += 1;
//       i++;
//     }
//   }
//   return sum;
// }
// console.log(
//   points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
// ); // should output 30

// let str = "apple is in the house";
// let newStr = str.replaceconsole.log("1" > "2");
// let arr = [
//   "0:1",
//   "0:2",
//   "0:3",
//   "0:4",
//   "1:2",
//   "1:3",
//   "1:4",
//   "2:3",
//   "2:4",
//   "3:4",
// ];
// let sum = 0;
// let newArr = [];
// arr = arr.join("").replace(/:/g, "");

// for (let i = 0; i < arr.length; i++) {
//   newArr.push(arr[i]);
// }

// for (let i = 0; i < newArr.length; i++) {
//   if (newArr[i] > newArr[i + 1]) {
//     sum += 3;
//     i++;
//   } else if (newArr[i] < newArr[i + 1]) {
//     sum += 0;
//     i++;
//   } else if (newArr[i] === newArr[i + 1]) {
//     sum += 1;
//     i++;
//   }
// }
// function sortByLength(array) {
//   // sortArray = [];
//   // // Return an array containing the same strings, ordered from shortest to longest
//   // // for (let i = 0; i < array.length; i++) {
//   // // console.log(array[i].length);
//   // // sortArray = array.sort((a, b) => a - b);
//   // for (let i = 0; i < array.length; i++) {
//   //   //console.log(array[i].length + " " + array[array.length -1]);
//   //   if (array[i].length > array[i + 1]) {
//   //     array.unshift(array[i + 1]);
//   //     // array.push(array[array.length - 1]);
//   //     // continue;
//   //   }
//   // }
//   // return array;

//   return array.sort((a, b) => a.length - b.length);
// }
// console.log(sortByLength(["Beg", "I", "To", "there"]));

function likes(names) {
  let answer;
  if (names.length === 0) {
    answer = "no one likes this";
  } else {
    for (let i = 0; i < names.length; i++) {
      if (names.length === 1) {
        answer = `${names[i]} likes this`;
      } else if (names.length > 1 && names.length < 3) {
        answer = `${names[i - 1]} and ${names[i]} like this`;
      } else if (names.length > 2 && names.length < 4) {
        answer = `${names[i - 2]} , ${names[i - 1]} and ${names[i]} like this`;
      } else if (names.length > 3) {
        answer = `${names[0]} and ${names[1]} and ${
          names.length - 2
        } others like this`;
      }
    }
  }
  return answer;
}
console.log(likes(["Alex", "Jacob", "Mark", "Max", "tim", "rob", "gail"]));

let x = [];
console.log(x.length);
