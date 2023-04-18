function alphabetPosition(text) {
  console.log(text);
  const textArray = text.split(" ");

  let textToNum = 0;
  let letters = "";
  let numArray = [];
  for (let i = 0; i < textArray.length; i++) {
    console.log(textArray[i]);
    const words = textArray[i];
    for (let y = 0; y < words.length; y++) {
      // console.log(words[y]);
      letters = words[y].toLowerCase();
      //console.log(letters);
      textToNum = letters.charCodeAt(0) - 96;

      if (textToNum > 0 && textToNum < 27) {
        numArray.push(textToNum);
      }
      // console.log(numArray);
    }
    // console.log(letters);
  }
  return numArray.join(" ");
}
console.log(alphabetPosition("$ %"));
