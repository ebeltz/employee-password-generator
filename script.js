// Assignment Code
var generateBtn = document.querySelector("#generate");

// Possible User Input Options
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var special = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'
];

// Prompt for User Input Options
function conditions() {
  var isValid = false;
  do {
    var length = prompt("How long does your password need to be? Choose between 8 and 128 characters");
    var askNumbers = confirm("Does your password need to include numbers?");
    var askLowerCase = confirm("Does your password need to include lower case letters?");
    var askUpperCase = confirm("Does your password need to include upper case letters?");
    var askSpecial = confirm("Does your password need to include special characters?");
    var responses = {
      length: length,
      askNumbers: askNumbers,
      askLowerCase: askLowerCase,
      askUpperCase: askUpperCase,
      askSpecial: askSpecial
    } 
    if((length < 8)||(length > 128))
    alert("Choose a number between 8 and 128");
    else if((!askNumbers)&&(!askLowerCase)&&(!askUpperCase)&&(!askSpecial))
    alert("Please choose at least one type!");
    else
    isValid = true;

  } while(!isValid);
  return responses;
}

// Function that results in a strong password from the user's responses



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


