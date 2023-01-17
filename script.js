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

// ******* Any console.logs are for debugging purposes only **********

// ------------------- Function to prompt user for password options -------------------

function getPasswordOptions() {
  let passwordLength = prompt(
    "Please select a password length between 10 and 64"
  );
  if (passwordLength === null) {
    return null; // added this if statement so that if users click on cancel the box closes, before it did not
  }
  passwordLength = parseInt(passwordLength); //parseInt makes the user string input into a integer
  while (
    isNaN(passwordLength) || //isNan checks that password length is not a number
    !Number.isInteger(passwordLength) || // check if user input is a valid integer or not
    passwordLength < 10 ||
    passwordLength > 64 // checks that input is within our range
  ) {
    // this while function checks the conditions with a double pipe, if one condition is false it will prompt an alert.
    alert(
      "Password length must be a number between 10 and 64 and no decimals, please input your choice again"
    ); // ASK BCS suggested using .split (" ") if user typed 2 numbers, however I later found out I also needed something for when user typed a string
    return getPasswordOptions();
  }
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
    // once all prompts given, this while condition checks ALL conditions at once. If they are all not true it will ask the prompts again until at least 1 is selected/true
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
    // this alert has the \n to make breaks within the text
  );
  console.log(passwordLength, lowerCase, upperCase, numeric, special);
  return { passwordLength, lowerCase, upperCase, numeric, special }; //returns our values for the input, to be used later
}

// ------------------- Function for getting a random element from an array -------------------

function getRandom(arr) {
  let randomChars = Math.floor(Math.random() * arr.length); // math floor to round up the random decimal from math random then * the array.length
  // console.log(arr[randomChars]);
  return arr[randomChars]; // return random element in the array
  //note we could also put the math.floor directly inside the [], although here I just returned the randomChar selected inside the array
}

// ------------------- Function to generate password with user input -------------------

function generatePassword() {
  let passwordOptions = getPasswordOptions(); // creates a variable that stores the values in the getPasswordOptions function
  let password = ""; //empty variable to store values for password
  let characters = []; // empty array to store randomized characters

  if (passwordOptions.lowerCase === true) {
    characters = characters.concat(lowerCasedCharacters); // this if functions checks if our user selected lowercase, if they did it concats/adds our loweredCasedCharacters into the characters array we created earlier. It applies this logic for the following ones as well.
  }
  if (passwordOptions.upperCase === true) {
    characters = characters.concat(upperCasedCharacters);
  }
  if (passwordOptions.numeric === true) {
    characters = characters.concat(numericCharacters);
  }
  if (passwordOptions.special === true) {
    characters = characters.concat(specialCharacters);
  }
  console.log(characters);

  for (let i = 0; i < passwordOptions.passwordLength; i++) {
    password += getRandom(characters); // this for loop gives us random character/elements from our characters array. The length is defined by the user input previously given obtained in getPasswordOptions
  }
  {
    console.log(password);
  }
  return password;
}

// ------------------- Get references to the #generate element -------------------

let generateBtn = document.querySelector("#generate");

// ------------------- Write password to the #password input -------------------

function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// ------------------- Add event listener to generate button -------------------

generateBtn.addEventListener("click", writePassword);
