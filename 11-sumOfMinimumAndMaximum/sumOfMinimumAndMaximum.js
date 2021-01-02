function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
    var new_arr =nums.slice();
    
    new_arr.sort(function(a,b) { 
        if(a>b) return 1;
        if(a<b) return -1;
        return 0;
    });

    var min=new_arr[0];
    var max=new_arr[nums.length-1];    
    return min+max;
}
console.log(sumOfMinimumAndMaximum([ 2, 5, 6, 23, 20, 16 ]));

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;