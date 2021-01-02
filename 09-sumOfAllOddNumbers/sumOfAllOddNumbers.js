function sumOfAllOddNumbers(nums) {
  // Insert code here;
    var oddCount=0;
    for(var i=0; i<nums.length; i++) {
        if (nums[i]%2 !=0)
            oddCount++;
    }
    return oddCount;
}
console.log(sumOfAllOddNumbers([0,1,2,3,4,5,6,7]));

// Do not edit this line;
module.exports = sumOfAllOddNumbers;