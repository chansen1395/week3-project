
//******************//
// UI Logic
//******************//

// Retrieve input for Lil' Beepy
$(document).ready(function () {
  $("form#number-input").submit(function (event) {
    event.preventDefault();
    var number = $("#lil-beepy").val();
    var name = $("#name").val().toString();
    var reverse = $("#reverse").val().toString();
    console.log(reverse);
    showBeepy(lilBeepy(number, name, reverse));
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
// function lilBeepy(number, name) {
  var beepyArray = [];
  // var beepySays;

  var arrayCounter = 1;
  // if (number < 0) {
  //   arrayCounter = -1;
  // }
  // test if NaN or = 0
  if (isNaN(number) || (number <= 0)) {
    if (isNaN(number)) {
      beepyArray = "Not a number, silly. Enter a number.";
      return beepyArray;
    } else if (number <= 0) {
      beepyArray = "Doesn't work with 0 or negative numbers ...yet.";
      return beepyArray;
    }
  }
  // Each time the counter increments, push the arrayCounter into beepyArray
  while (arrayCounter <= number) {
    // Test if the 'stringed' version of a number includes 100,
    // push 'hundo' text into beepyArray, increment the counter.
    if (arrayCounter === 100) {
      // .toString().includes(100)
      neighborNum = name + "! We made it to ONE HUNDOOOO!";
      beepyArray.push(neighborNum);
      arrayCounter++;

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
  if (reverse === "on") {
    return beepyArray.reverse().join(" ");
  } else{
    return beepyArray.join(" ");
  }
}

