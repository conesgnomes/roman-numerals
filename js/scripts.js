// Back-end logic

var numbersLessThanFour = [1, 2, 3]
var numbersGreaterThanFive = [4, 5, 6, 7, 8, 9];
var numerals = ["i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x"];

function convertOne(userInput) {
  if (userInput === 1) {
    return "I";
  };
};

function convertFive(userInput) {
  if (userInput < 4) {
    for(index = 0; index <= userInput; index += 1) {

      var addI += "I";
      return addI;
    };
  };
};

//
//
// var inputSplit = function(userInput) {
//   return parseInt(userInput.split(""));
// }
//
// if (inputSplit === 5) {
//   var inputSplit = inputSplit.splice(0, 1, "V")
// } alert(inputSplit);

// if (inputSplit > numbersGreaterThanFive) {
//   var remainder = inputSplit % 5
//   if
//   if ()
// }


// for(var index = 0; index < inputSplit.length index += 1) {
//   var inputSplit = parseInt(userInput.split("")); // this is the value inputted by the user in array form
// //
//   var inputArrayPosition = inputSplit.findIndex(function() {
//     inputSplit[index] ==== numbers[index];
//
//   })


//   if (inputSplit[index] < 1) {
//     inputSplit[0]
//   }
//
// }

// UI logic

$(document).ready(function() {
  $("#calculator").submit(function(event){
    var userInput = parseInt($("input#number-input").val());

    var convertedNumber = convertOne(userInput);

    alert(convertedNumber);

  });

});
