class MySolution {
  countDownSum(num) {
    // Insert code here;
    if (num==1)
        return 1;
    else 
        return num + this.countDownSum(num-1);    
  }
}
var mySum =new MySolution ();
console.log(mySum.countDownSum(5));

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;