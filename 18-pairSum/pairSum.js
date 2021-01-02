function pairSum(nums, target) {
  // Insert code here;
    
    if (nums.length <=1) 
        throw "Length of nums array is 1 or lower. ";

    let myMap = new Map();   
    
    for (let i = 0; i<nums.length; i++) 
    {

        if (myMap.has(target - nums[i]))
        {
            return true;
        }
        myMap.set(nums[i], i);
    }
    return false;    
}

console.log(pairSum([1,2,3,4,5], 8));

// Do not edit this line;
module.exports = pairSum;