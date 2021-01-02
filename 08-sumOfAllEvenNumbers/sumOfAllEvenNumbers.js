function sumOfAllEvenNumbers(nums) {
  // Insert code here;
    var evenCount=0;
    for(var i=0; i<nums.length; i++) {
        if(nums[i]%2==0)
            evenCount++;
    }
    return evenCount;
}
console.log(sumOfAllEvenNumbers([0,1,2,3,4,5]));
// Do not edit this line;
module.exports = sumOfAllEvenNumbers;