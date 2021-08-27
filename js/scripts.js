
//******************//
// UI Logic
//******************//

// Output is hidden now so it doesn't look weird if the user 
// changes the forms and resubmits.
$("#output").hide();

// Retrieve input for Lil' Beepy
$(document).ready(function () {
  $("form#number-input").submit(function (event) {
    event.preventDefault();
    var number = $("#lil-beepy").val();
    var name = $("#name").val().toString();
    var reverse = $("#reverse").val().toString();
    console.log(reverse);
    showBeepy(lilBeepy(number, name, reverse));
    $("#output").fadeIn();
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
function lilBeepy(number, name, reverse) {

  var beepyArray = [];
  var arrayCounter = 0;

  // Default name if user supplies no name
  if (name === "") {
    name = "Big Boopy"
  }

  // test if NaN or <= 0
  if (isNaN(number) || (number < 0)) {
    if (isNaN(number)) {
      beepyArray = "Not a number, silly. Enter a number.";
      return beepyArray;
    } else if (number < 0) {
      beepyArray = "Doesn't work with 0 or negative numbers ...yet.";
      return beepyArray;
    }
  }

  // Each time the counter increments, push the arrayCounter into beepyArray
  while (arrayCounter <= number) {

    // Test if the 'stringed' version of a number includes 100,
    // push 'hundo' text into beepyArray, increment the counter.
    if (arrayCounter === 100) {
      neighborNum = name + "! We made it to ONE HUNDOOOO!";
      beepyArray.push(neighborNum);
      arrayCounter++;

      // Test if the 'stringed' version of a number includes a 3,
      // push 'neighbor' text into beepyArray, increment the counter.
    } else if (arrayCounter.toString().includes(3)) {
      neighborNum = "Won't you be my neighbor, " + name + "?";
      beepyArray.push(neighborNum);
      arrayCounter++;

      // Test if the 'stringed' version of a number includes a 2,
      // push 'boop' text into beepyArray, increment the counter.
    } else if (arrayCounter.toString().includes(2)) {
      boopedNum = "Boop!";
      beepyArray.push(boopedNum);
      arrayCounter++;

      // Test if the 'stringed' version of a number includes a 1,
      // push 'beep' text into beepyArray, increment the counter.
    } else if (arrayCounter.toString().includes(1)) {
      beepedNum = "Beep!";
      beepyArray.push(beepedNum);
      arrayCounter++;
    }

    // If no special case applies, push the number to the end of the array.
    else {
      beepyArray.push(arrayCounter + ",");
      arrayCounter++;
    }
  }
  // If reverse was selected in the UI, reverse the array
  if (reverse === "on") {
    return beepyArray.reverse().join(" ");

    // Otherwise, return it in its current state
  } else {
    return beepyArray.join(" ");
  }
}