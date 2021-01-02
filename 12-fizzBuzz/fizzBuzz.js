function fizzBuzz(start, end) {
  // Insert code here;
    var length=end-start+1;
    var numberArr = new Array(length);
    for (var i=0; i<length; i++) {
        if (start%15 == 0) {
            numberArr[i]= "FizzBuzz";
        } else if (start%3 == 0) {
            numberArr[i]= "Fizz";
        } else if (start%5 == 0) {
            numberArr[i]= "Buzz";
        } else {
           numberArr[i]=start;
        }   
        start++;
    }    
    return numberArr;
   
}
console.log(fizzBuzz(1, 20));
// Do not edit this line;
module.exports = fizzBuzz;