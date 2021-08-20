

var number = "abc";

function lilBeepy(number) {
  // for (i = 0; i < number; i++) {
    var beepyArray = []
    var beepySays;
    var arrayCounter = 1

    // test if NaN or <= 0
    if (isNaN(number) || (number <= 0)) {
      if (isNaN(number)){
        beepyArray = "Not a number, silly. Enter a number.";
        return console.log(beepyArray);
      } else if (number <= 0){
        beepyArray = "Doesn't work with 0 or negative numbers ...yet.";
        return console.log(beepyArray);
      }
    } else {
      // Each time the counter increments, push the arrayCounter into beepyArray
      while (arrayCounter <= number) {
        // Test if the 'stringed' version of a number includes a 3,
        // push 'neighbor' text into beepyArray, increment the counter.
        if (arrayCounter.toString().includes(3)) {
          neighborNum = "Won't you be my neighbor?"
          beepyArray.push(neighborNum);
          arrayCounter++;

        // Test if the 'stringed' version of a number includes a 2,
        // push 'boop' text into beepyArray, increment the counter.
        } else if (arrayCounter.toString().includes(2)){
          boopedNum = "Boop!"
          beepyArray.push(boopedNum);
          arrayCounter++;
        }
        // } else if {

        // }

        // If no special case applies, push the number to the end of the array.
        else {
          beepyArray.push(arrayCounter);
          arrayCounter++;
          // console.log(beepyArray);
        }
    }
    console.log(beepyArray);
  }
}

lilBeepy(13);