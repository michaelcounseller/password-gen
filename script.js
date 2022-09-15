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

Array.prototype.shuffle = function () {
  let i = this.length,
    randomValue,
    temp;

  while (--i > 0) {
    randomValue = Math.floor(Math.random() * (i + 1));
    temp = this[randomValue];
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

    if(capsPrompt && lowercasePrompt && specialPrompt && !numPrompt) {

    }

    

    // lowCaseArray.shuffle();

    console.log(lowCaseArray);


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

    console.log(finalArray);

    //I want to make the array size as long as the passLength value
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
