class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    if (nums.length == 0) {
        return false;
    }    

    if (nums.length == 1) {
        if (nums[0]== target) {
            return true;
        } else {
            return false;
        }    
    }    
    
    var mid = Math.floor((nums.length-1)/2);

    if (nums[mid] == target) {  
        return true;
    } else if (nums[mid] > target) {
        var left = nums.slice(0,mid);
        return this.binarySearch(left, target);          
    } else { 
        let right = nums.slice(mid+1, nums.length);   
        return this.binarySearch(right, target);
    }        
  }
}

let mySearch =new MySolution();
console.log(mySearch.binarySearch([1,2,3,4,5], 5));
// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;