function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
    let mySet = new Set();  
    for(let i=0; i<args.length; i++) {
        for (let item of args[i] ) {
            mySet.add(item);
        }
    }
    return mySet;
}

console.log(setUnionOfAnyAmountOfSets([ 1, 2, 4 ], [ 4, 5, 6 ], [ 6, 7, 8 ]));
// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;