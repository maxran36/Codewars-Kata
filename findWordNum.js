// function high(x) {
//   let result = 0;
//   let letterArray = [];
//   let charCode;
//   letterArray = x.split(" ");

//   console.log(typeof letterArray);
//   for (let i = 0; i < x.length; i++) {
//     if (x.charCodeAt(i) >= 97 && x.charCodeAt(i) <= 122) {
//       charCode = x.charCodeAt(i) - 96;
//       result += charCode;
//     }
//   return result;
// }
// console.log(high("abc abcdz"));
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

// const letterValues = {
//   A: 1,
//   B: 2,
//   C: 3,
//   D: 4,
// };
// function findHighestLetterValue(str) {
//   let highestValue = 0;
//   for (let i = 0; i < str.length; i++) {
//     const letter = str[i].toUpperCase();
//     const value = letterValues[letter];
//     if (value > highestValue) {
//       highestValue = value;
//     }
//   }
//   return highestValue;
// }
// const inputString = "aa bb dc";
// const highestValue = findHighestLetterValue(inputString);
// console.log(highestValue);

// //FUNCTION TO MAKE SENTENCE ARRAY
// function sentenceToArray(str) {
//   const wordArray = str.split(" ");
//   return wordArray;
// }
// console.log(sentenceToArray("ab bb "));
// //Assign numbers to letter
// function letterValues(char) {
//   sentenceToArray(char);
//   return char.toUpperCase().charCodeAt(0) - 64;
// }
// console.log(letterValues("ab is very high letter"));
// //Function to calculate the value of a word based on the sum of it's letter values

// //CHECK FRIDAY"S CODE TO SEE WHAT I CHANGED
// function wordValue(word) {
//   word = sentenceToArray(word);
//   let value = 0;
//   for (let i = 0; i < word.length; i++) {
//     value += letterValues(word.charAt(i));
//   }
//   return value;
// }
// console.log(wordValue("ab bb"));

// function findGreatesValue(words) {
//   let greatestWord = null;
//   let greatestValue = 0;
//   for (let i = 0; i < words.length; i++) {
//     const value = wordValue(words[i]);
//     if (value > greatestValue) {
//       greatestValue = value;
//       greatestWord = words[i];
//     }
//   }
//   return greatestWord;
// }
//const words = ["hello", "world", "javascript", "programming"];

// const greatestWord = findGreatesValue(words);
// console.log(`The word with the biggest num is ${greatestWord}`);

// function high(x) {
//   let lettersToNumbers = x.toUpperCase().charCodeAt(0) - 64;

// let numArray = [];
//   for (let i = 0; i < lettersToNumbers.length; i++) {
//     numArray.push(lettersToNumbers[i]);
//   }

//   return lettersToNumbers;
// }
//////console.log(high("a b c"));
// const words = "ab c";
// const arraty = [];
// for (let i = 0; i < words.length; i++) {
//   arraty.push(words[i]);
// }
// console.log(arraty);

// function highestWord(sentence) {
//   const words = sentence.split(" ");
//   let highestScore = 0;
//   let highestWord = "";

//   for (let i = 0; i < words.length; i++) {
//     const word = words[i];
//     let score = 0;

//     for (let j = 0; j < word.length; j++) {
//       const letter = word[j].toUpperCase();
//       score += letter.charCodeAt(0) - 64;
//     }
//     if (score > highestScore) {
//       highestScore = score;
//       highestWord = word;
//     }
//   }
//   return highestWord;
// }
// console.log(highestWord("a bb ccc z"));


//Solution that worked
function high(x) {
  //Takes sentence string and turns it into an array
  const words = x.split(" ");
  let highestScore = 0;
  let highestWord = "";
  // Main loop through word array
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let score = 0;

    //assigns numbers to letters and sums
    for (let j = 0; j < word.length; j++) {
      const letter = word[j].toUpperCase();
      score += letter.charCodeAt(0) - 64;
    }

    //Takes the sum of each word at the loop iteration and see if it is higher than the previous
    if (score > highestScore) {
      highestScore = score;
      highestWord = word;
    }
  }
  return highestWord;
}
console.log(high("abcd zpp"));
