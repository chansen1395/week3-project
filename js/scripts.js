

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
        if (arrayCounter.toString().includes(3)) {
          neighbor = "Won't you be my neighbor?"
          beepyArray.push(neighbor);
          arrayCounter++;
        } else {
          beepyArray.push(arrayCounter);
          arrayCounter++;
          // console.log(beepyArray);
        }
    }
    console.log(beepyArray);
  }
}

lilBeepy(13);