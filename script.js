// Assignment code here

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

let numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let lowCaseArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let capsCaseArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let specCharaArray = [
  "!",
  '"',
  "'",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "[",
  "]",
  "{",
  "}",
  ";",
  ":",
  "/",
  "\\",
  "|",
  "-",
  "=",
  "+",
  "_",
  "`",
  "~",
  ",",
  ".",
  "?",
  "<",
  ">",
];

Array.prototype.shuffle = function () { //Creates a method that can be accessed via protoype/_proto_ property from any array
  let i = this.length,
    randomValue,
    temp;

  while (--i > 0) { //Itll start decending order till it hits the first index
    randomValue = Math.floor(Math.random() * (i + 1)); //This will be the index that is going to be swapped with the current index
    temp = this[randomValue]; //The start of the swapping of the index.
    this[randomValue] = this[i];
    this[i] = temp;
  }
  return this;
};

function generatePassword() {
  let answerArray = [], outputArray = [], tempArray = [], finalArray = [];

  let passLength = parseInt(
    prompt(
      "How many characters would you like your password to be? It is recommended that your character length is MORE THAN 9 and LESS THAN 128!"
    )
  );

  if (passLength <= 0) {
    alert("Needs to be more than 0!");
    generatePassword();
  } else if (passLength > 128) {
    alert("Needs to be lower than 128");
    generatePassword();
  } else {
    let capsPrompt = confirm(
      "Would you like captial letters in your password?"
    );
    let lowercasePrompt = confirm(
      "Would you like a lowercase letters in your password?"
    );
    let specialPrompt = confirm(
      "Would you like special characters in your password?"
    );
    let numPrompt = confirm("Would you like numbers in your password?");

    if (!capsPrompt && !lowercasePrompt && !specialPrompt && !numPrompt) {
      alert("You need to choose one");
      generatePassword();
    }

    if (capsPrompt) {
      answerArray = capsCaseArray
    } else if (lowercasePrompt) {
      answerArray = lowCaseArray
    } else if (specialPrompt) {
      answerArray = specCharaArray
    } else if (numPrompt) {
      answerArray = numArray
    }

    if(capsPrompt && lowercasePrompt && specialPrompt) {
      answerArray = capsCaseArray.concat(lowCaseArray.concat(specCharaArray))

    } else if (capsPrompt && lowercasePrompt && numPrompt) {
      answerArray = capsCaseArray.concat(lowCaseArray.concat(numArray))

    } else if (capsPrompt && specialPrompt && numPrompt){
      answerArray = capsPrompt.concat(specCharaArray.concat(numArray))

    } else if (capsPrompt && lowercasePrompt) {
      answerArray = capsCaseArray.concat(lowCaseArray)

    } else if (capsPrompt && specialPrompt) {
      answerArray = capsCaseArray.concat(specCharaArray)

    } else if (capsPrompt && numArray) {
      answerArray = capsCaseArray.concat(numArray)
    }

    if(lowercasePrompt && specialPrompt && numArray) {
      answerArray = lowCaseArray.concat(specCharaArray.concat(numArray))

    } else if (lowercasePrompt && specialPrompt) {
      answerArray = lowCaseArray.concat(specCharaArray)

    } else if  (lowercasePrompt && numPrompt) {
      answerArray = lowCaseArray.concat(numArray)

    } else if (specialPrompt && numPrompt) {
      answerArray = specCharaArray.concat(numArray)
    }

    answerArray.shuffle()
    console.log(answerArray)

    for (i = 0; i < answerArray.length; i++) {
      outputArray.push(answerArray[i]);
      console.log(outputArray);
      finalArray = tempArray.concat(outputArray)
      if (outputArray.length < passLength) {
        answerArray.shuffle()
        i = 0;
        continue;
      }
      if (outputArray.length === passLength) {
        break;
      }
    }
    finalArray = finalArray.join('')
    return finalArray
  }
}

let prompts = function () {};

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
