// Assignment code here
var alphabetslower = "abcdefghijklmnopqrstuvwxyz";
var alphabetsUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special  = "!@#$%^&*_-+=";
var allChars = "";
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  //passwordText.value = password;
  passwordText.textContent = password;
   
}

var generatePassword = function(){
  var password = '';
  allChars += numbers;
  var lengthPassword = Number(window.prompt("How many characters would you like your password to be?"));
  
  while(lengthPassword < 8 || lengthPassword > 128){
    var lengthPassword = Number(window.prompt("Please choose a proper length!"));
  }
  var confirmLower = window.confirm("Would you like to add lowercase characters?");
  if(confirmLower){
    allChars += alphabetslower;
  }

  var confirmUpper = window.confirm("Would you like to add uppercase characters?");
  if(confirmUpper){
    allChars += alphabetsUpper;
  }


  var confirmspecial  = window.confirm("Would you like to add special characters?")
  if(confirmspecial){
    allChars += special;
  }
  console.log(allChars);

  for(var i = 0; i < lengthPassword; ++i){
    password += allChars.charAt( Math.floor(Math.random() * allChars.length));
  }
  
  return password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
