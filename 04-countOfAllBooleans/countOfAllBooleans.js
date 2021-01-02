function countOfAllBooleans(arr) {
    // Insert code here;
    var count=0;
    for(var i=0; i<arr.length; i++) {
      if (typeof arr[i] === "boolean")
        count++;
    }
    return count;
}
console.log(countOfAllBooleans(["hello", "hi", true, true, 99, false, "nice"]));

// Do not edit this line;
module.exports = countOfAllBooleans;