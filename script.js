// Assignment Code
var generateBtn = document.querySelector("#generate"); {
}

// Code defines function of the generator, closed by the return on line #
function generatePassword(){
  console.log("Thank you for using this magic password generator!")

// Following code outlines the variables/characters of final password returned

  const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",]
  const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "|", "'", ";", ":", "<", ",", ">", ".", "/", "?", "`", "~"]
  const uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",]
  const lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  const possibleCharacters = []

// Following code provides the conditions of the functions


// Following code validates the input from user given outlined conditions of variables

// Following return function finalizes the code and prompts the password to display on the page
  return "Magically generated password will go here!";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
