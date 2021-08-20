# _{Mr. Roboger's Neighborhood}_

#### _A web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with specific exceptions._

#### By _**{Connor Hansen}**_

## Technologies Used

- _HTML_
- _CSS_
- _Bootstrap_
- _Javascript_
- _JQuery_
- _VSCode_

## Description

_{This webpage has been created to explore arrays and looping. The user inputs a number, and the program displays a transformed array based on the following rules:}_
- _Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"_
- _Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"_
- _Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor, (name)?"_

#### Additional Objectives
- _If the number is 100: all digits are replaced (all digits) with "(name)! We made it to ONE HUNDOOOO!"_
- _The array is reversed if the user indicates as such in a list-box._
- _The user may input their name to be displayed along with a message._


_{Numbers with 3 take priority over numbers with 3 and a 2 or 1, and numbers with 2 take priority over numbers with 2 and a 1. 100 Takes priority over all numbers. The user may enter numbers one after another and the results will change accordingly. Likewise, they can change their name or whether they wish to use the reverse feature. These changes are reflected upon submit being pressed.}_

## Setup/Installation Requirements

- _To clone and run from [GitHub Repo](https://github.com/chansen1395/week3-project):_

  - _In bash at a folder of your choice, type the following:_
    - $ git clone https://github.com/chansen1395/week3-project
    - $ code .
  - _Use a program such as VSCode to view and run the program._

- _Alternatively, see links below to open the [Active gh-pages link](https://chansen1395.github.io/week3-project/)_

## Specs

### Describe: showBeepy()

### Test: "Takes an array and prints it to the user."
- Code: showBeepy('Beep!', 2, 3);
- Expected Output: "Beep!", 2, 3


### Describe: lilBeepy()

### Test: "It not produce any output if the input is NaN."
- Code: lilBeepy("abc#$%");
- Expected Output: "Not a number, silly. Enter a number."

### Test: "It will not produce output if input is <= 0."
- Code: lilBeepy(-1) or lilBeepy(0);
- Expected Output: "Doesn't work with 0 or negative numbers ...yet."

### Test: "It will return 'Won't you be my neighbor,' + name + '?' if input is 3."
- Code: lilBeepy(3, "bob");
- Expected Output: "Won't you be my neighbor, bob?"

### Test: "It will return 'boop' if input is 2."
- Code: lilBeepy(2);
- Expected Output: "boop"

### Test: "It will return 'beep' if input is 1."
- Code: lilBeepy(1);
- Expected Output: "beep"

### Test: "It will list output numbers in an array
- Code: 
  * console.log(beepyArray);
  * lilBeepy(3);
- Expected Output: "beep, boop, Won't you be my neighbor?"

### Test: "It will return 'beep' if input contains any 1's."
- Code: lilBeepy(15);
- Expected Output: "beep"

### Test: "It will return 'boop' if input contains any 2's."
- Code: lilBeepy(25);
- Expected Output: "boop"

### Test: "It will return 'Won't you be my neighbor?' if input contains any 3's."
- Code: lilBeepy(35);
- Expected Output: "Won't you be my neighbor?"

### Test: "If input contains a 2 and a 1, 2 takes precedent."
- Code: lilBeepy(12);
- Expected Output: "boop"

### Test: "If input contains a 3 and a 2, 3 takes precedent."
- Code: lilBeepy(32);
- Expected Output: "Won't you be my neighbor?"

### Test: "If input contains a 3 and a 1, 3 takes precedent."
- Code: lilBeepy(13);
- Expected Output: "Won't you be my neighbor?"

### Test: "If input contains a 3, 2, and a 1, 3 takes precedent."
- Code: lilBeepy(123);
- Expected Output: "Won't you be my neighbor?"

### Test: "If reverse selector is on, it reverses the display of the array."
- Code: lilBeepy(3, "bob", "on");
- Expected Output: "Won't you be my neighbor, Bob? Boop! Beep!"

### Test: "If input equals 100, it takes precedent."
- Code: lilBeepy(100, "bob", "on");
- Expected Output: "Bob! We made it to ONE HUNDOOOO! 99, 98..."

## Known Bugs

- No known bugs.
- Negative number implementation is WIP.

## License

_{Let me know if you run into any issues or have questions, ideas or concerns. I encourage you to contact me or make a contribution to the code.}_

## Contact Information

- _{<chansen13@georgefox.edu>}_
- _{[GitHub Repo - main](https://github.com/chansen1395/week3-project)}_
- _{[Active gh-pages link](https://chansen1395.github.io/week3-project/)}_
