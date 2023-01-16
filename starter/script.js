// Array of special characters to be included in password
let specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
let numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
let lowerCasedCharacters = [
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

// Array of uppercase characters to be included in password
let upperCasedCharacters = [
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

// Function to prompt user for password options
function getPasswordOptions() {
  let passwordLength = prompt(
    "Please select a password length between 10 and 64"
  );
  passwordLength = parseInt(passwordLength); //parse Int to change from number to integer
  while (passwordLength < 10 || passwordLength > 64) {
    alert(
      "Password length must be between 10 and 64, please input your choice again"
    );
    return getPasswordOptions();
  } // this if statement checks that the user not selected a number less than 10 || (and) more than 64. The || (double pipe) checks both statements are true. If they are not it comes back with the alert
  let lowerCase = confirm(
    "Do you want lowercase in your password? Click 'OK' if yes or cancel if not"
  );
  let upperCase = confirm(
    "How about uppercase in your password? Click 'OK' if yes or cancel if not"
  );
  let numeric = confirm("Numbers?");
  let special = confirm(
    "Last one, do you want special characters? Click 'OK' if yes or cancel if not"
  );
  while (!lowerCase && !upperCase && !numeric && !special) {
    alert(
      "You need at least 1 character type for your password to be secure, try again"
    );
    let lowerCase = confirm(
      "Do you want lowercase in your password? Click 'OK' if yes or cancel if not"
    );
    let upperCase = confirm(
      "How about uppercase in your password? Click 'OK' if yes or cancel if not"
    );
    let numeric = confirm("Numbers?");
    let special = confirm(
      "Last one, do you want special characters? Click 'OK' if yes or cancel if not"
    );
  }
  alert(
    "You have chosen the following:\n" +
      "Password Length: " +
      passwordLength +
      "\nlower case: " +
      lowerCase +
      "\nupper case: " +
      upperCase +
      " \nnumeric: " +
      numeric +
      " \nspecial: " +
      special
  );
}

// Function for getting a random element from an array
function getRandom(arr) {
  let randomChars = Math.floor(Math.random() * arr.length);
  // let randomNumb = arr[randomChars];
  return arr[randomChars];
  //note we could also put the math.floor directly inside the [], although here I just returned the randomChar selected inside the array
}

// // function to create new array from selected characters and type password
function getPickedCharacters() {
  let characters = [];
  if ((getPasswordOptions.lowerCase = true));
  {
    characters = characters.concat(lowerCasedCharacters);
  }
  if ((getPasswordOptions.upperCase = true));
  {
    characters = characters.concat(upperCasedCharacters);
  }
  if ((getPasswordOptions.numeric = true));
  {
    characters = characters.concat(numericCharacters);
  }
  if ((getPasswordOptions.special = true));
  {
    characters = characters.concat(specialCharacters);
  }
  console.log(characters);
}

function getPassword() {
//   let userPass = [];
//   while (userPass.length < getPasswordOptions.passwordLength) {
//     const randomPass =  
//   }
//   console.log(userPass);
// }

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  getPickedCharacters();
  // getPassword();
  // let password = "";
  // for (let i = 0; i < passwordLength.length; i++) {
  //   password += getRandom(characters);
  // }
  // return password;
}

// Get references to the #generate element
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
