// Assignment Code
// Replaced "var" with "const" in Assignment Code

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// End of provided Assignment Code

// Establishes function of generator
function generatePassword() {
  console.log("Thank you for choosing to use our magical password constructor!");

// Outlines variables/characters in outputted password
  const numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "|", "'", ";", ":", "<", ",", ">", ".", "/", "?", "`", "~"];
  const uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  let possibleCharacters = "";

  // Following code outlines conditional functions of generator

  numberOfCharacters = parseInt(prompt("How many characters would you like in your password? Please choose between 8 and 128 characters."));
  
  if (numberOfCharacters < 8 || numberOfCharacters > 128) {
    return "Invalid! Please choose a valid number of characters between 8 and 128.";
  } else {
    console.log("The number is between 8 and 128.");
    console.log("Your password will be " + numberOfCharacters + " characters long.");
  }

  // Following code validates the input from the user given outlined conditions of variables and determines output

  containsLowercaseCharacters = confirm("Would you like to include lowercase characters?");
  if (containsLowercaseCharacters) {
    possibleCharacters += lowercaseCharacters.join('');
    alert("Your password will contain lowercase characters.");
  } else {
    alert("Your password will NOT contain lowercase characters.");
  }

  containsUppercaseCharacters = confirm("Would you like to include uppercase characters?");
  if (containsUppercaseCharacters) {
    possibleCharacters += uppercaseCharacters.join('');
    alert("Your password will contain uppercase characters.");
  } else {
    alert("Your password will NOT contain uppercase characters.");
  }

  containsNumbers = confirm("Would you like to use numbers?");
  if (containsNumbers) {
    possibleCharacters += numericCharacters.join('');
    alert("Your password will contain numbers.");
  } else {
    alert("Your password will NOT contain numbers.");
  }

    containsSpecialCharacters = confirm("Would you like to include special characters?");
  if (containsSpecialCharacters) {
    possibleCharacters += specialCharacters.join('');
    alert("Your password will contain special characters.");
  } else {
    alert("Your password will NOT contain special characters.");
  }

  if (!containsLowercaseCharacters && !containsUppercaseCharacters && !containsNumbers && !containsSpecialCharacters) {
    return "Please select at least one character type.";
  }

  let finalPassword = "";
  for (let i = 0; i < numberOfCharacters; i++) {
    const rng = Math.floor(Math.random() * possibleCharacters.length);
    finalPassword += possibleCharacters.charAt(rng);
  }
  return finalPassword;
}

// End of assignment JavaScript code