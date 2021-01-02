function countOfAllIndexMatchingNumbers(nums) {
  // Insert code here;
    var count=0;
    for (var i=0; i<nums.length; i++) {
        if(nums[i]==i)
            count++;
    }        
    return count;
}

console.log(countOfAllIndexMatchingNumbers([0,2,3,4,4,5,77]));

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;