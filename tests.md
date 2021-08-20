### Describe: lilBeepy()

### Test: "It not produce any output if the input is NaN."
### Code: pigLatin("abc#$%");
### Expected Output: ""

### Test: "It will not produce output if input is <= 0>."
### Code: pigLatin(-1);
### Expected Output: ""

### Test: "It will return 'beep' if input is 1."
### Code: pigLatin(1);
### Expected Output: "beep"

### Test: "It will return 'boop' if input is 2."
### Code: pigLatin(2);
### Expected Output: "boop"

### Test: "It will return 'Won't you be my neighbor?' if input is 3."
### Code: pigLatin(3);
### Expected Output: "Won't you be my neighbor?"

### Test: "It will list output numbers in an array
### Code: 
### console.log(beepyArray);
### pigLatin(3);
### Expected Output: "beep, boop, Won't you be my neighbor?"

### Test: "It will return 'beep' if input contains any 1's."
### Code: pigLatin(15);
### Expected Output: "beep"

### Test: "It will return 'boop' if input contains any 2's."
### Code: pigLatin(25);
### Expected Output: "boop"

### Test: "It will return 'Won't you be my neighbor?' if input contains any 3's."
### Code: pigLatin(35);
### Expected Output: "Won't you be my neighbor?"

### Test: "If input contains a 2 and a 1, 2 takes precedent."
### Code: pigLatin(12);
### Expected Output: "boop"

### Test: "If input contains a 3 and a 2, 3 takes precedent."
### Code: pigLatin(32);
### Expected Output: "Won't you be my neighbor?"

### Test: "If input contains a 3 and a 1, 3 takes precedent."
### Code: pigLatin(13);
### Expected Output: "Won't you be my neighbor?"

### Test: "If input contains a 3, 2, and a 1, 3 takes precedent."
### Code: pigLatin(123);
### Expected Output: "Won't you be my neighbor?"
