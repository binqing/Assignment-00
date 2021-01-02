function isPalindrome(word) {
  // Insert code here;    
    var i = 0;
    var j = word.length-1;
    while(i<j){
        if(word.charAt(i) != word.charAt(j))
            return false;
            i++;
            j--;
    }
    return true;
}

console.log(isPalindrome("racecar"));
// Do not edit this line;
module.exports = isPalindrome;