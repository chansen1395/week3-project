
//******************//
// UI Logic
//******************//

// Retrieve input for Lil' Beepy
$(document).ready(function () {
  $("form#number-input").submit(function (event) {
    event.preventDefault();
    var number = $("#lil-beepy").val();
    showBeepy(lilBeepy(number));
  });
});

function showBeepy(beepyArray) {
  $("#translation").html(beepyArray);
}


//******************//
// Business Logic
//******************//

// Main function takes input and builds an
// array based on specific conditions.
function lilBeepy(number) {
  
  function isNegative(number) {
    if (number < 0) {
      return true;
    }
  }

  var beepyArray = [];
  // var beepySays;
  var arrayCounter = 1;
  var isNegative = isNegative(number)

  // test if NaN or <= 0
  if (isNaN(number) || (number <= 0)) {
    if (isNaN(number)) {
      beepyArray = "Not a number, silly. Enter a number.";
      return beepyArray;
    } else if (number === 0) {
      beepyArray = "Doesn't work with 0 or negative numbers ...yet.";
      return beepyArray;
    }
  } else {
    // Each time the counter increments, push the arrayCounter into beepyArray
    while (arrayCounter <= number) {
      // Test if the 'stringed' version of a number includes a 3,
      // push 'neighbor' text into beepyArray, increment the counter.
      if (arrayCounter.toString().includes(3)) {
        neighborNum = "Won't you be my neighbor?"
        // If negative, reverse the string, push reversed string.
        if (isNegative(number)) {
          beepyArray.push(neighborNum.split("").reverse().join(""));
        } else {
        beepyArray.push(neighborNum);
        arrayCounter++;
        }

        // Test if the 'stringed' version of a number includes a 2,
        // push 'boop' text into beepyArray, increment the counter.
      } else if (arrayCounter.toString().includes(2)) {
        boopedNum = "Boop!"
        beepyArray.push(boopedNum);
        arrayCounter++;

        // Test if the 'stringed' version of a number includes a 1,
        // push 'beep' text into beepyArray, increment the counter.
      } else if (arrayCounter.toString().includes(1)) {
        beepedNum = "Beep!"
        beepyArray.push(beepedNum);
        arrayCounter++;
      }

      // If no special case applies, push the number to the end of the array.
      else {
        beepyArray.push(arrayCounter + ",");
        arrayCounter++;
      }
    }
    // Line below for using in console & debugging
    // console.log(beepyArray);
  }
  return beepyArray.join(" ");
}

