
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

  var beepyArray = [];
  // var beepySays;

  var arrayCounter = 1;
  // if (number < 0) {
  //   arrayCounter = -1;
  // }

  // test if NaN or = 0
  if (isNaN(number) || (number === 0)) {
    if (isNaN(number)) {
      beepyArray = "Not a number, silly. Enter a number.";
      return beepyArray;
    } else if (number === 0) {
      beepyArray = "Doesn't work with 0 or negative numbers ...yet.";
      return beepyArray;
    }
  }
  // Each time the counter increments, push the arrayCounter into beepyArray
  while (arrayCounter <= number) {
    // Test if the 'stringed' version of a number includes a 3,
    // push 'neighbor' text into beepyArray, increment the counter.
    if (arrayCounter.toString().includes(3)) {
      neighborNum = "Won't you be my neighbor?"
      // If negative, reverse the string, push reversed string.
      // if (arrayCounter < 0) {
      //   beepyArray.push(neighborNum.split("").reverse().join(""));
      //   arrayCounter++;
      // } else {
      beepyArray.push(neighborNum);
      arrayCounter++;

      // Test if the 'stringed' version of a number includes a 2,
      // push 'boop' text into beepyArray, increment the counter.
    } else if (arrayCounter.toString().includes(2)) {
      boopedNum = "Boop!"
      // If negative, reverse the string, push reversed string.
      // if (arrayCounter < 0) {
      //   beepyArray.push(boopedNum.split("").reverse().join(""));
      //   arrayCounter++;
      // } else {
      beepyArray.push(boopedNum);
      arrayCounter++;

      // Test if the 'stringed' version of a number includes a 1,
      // push 'beep' text into beepyArray, increment the counter.
    } else if (arrayCounter.toString().includes(1)) {
      beepedNum = "Beep!"
      // If negative, reverse the string, push reversed string.
      // if (arrayCounter < 0) {
      //   beepyArray.push(beepedNum.split("").reverse().join(""));
      //   arrayCounter++;
      // } else {
      beepyArray.push(beepedNum);
      arrayCounter++;
    }

    // If no special case applies, push the number to the end of the array.
    else {
      // If negative, reverse the string, push reversed string.
      // if (arrayCounter < 0) {
      //   beepyArray.push(arrayCounter + ",");
      //   arrayCounter++;
      // } else {
      beepyArray.push(arrayCounter + ",");
      arrayCounter++;
    }
  }
  return beepyArray.join(" ");
}
// Line below for using in console & debugging
// console.log(beepyArray);

// }

