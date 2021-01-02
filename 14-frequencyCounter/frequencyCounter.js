function frequencyCounter(word) {
  // Insert code here;
    var letterCount = {};
    for (let i=0; i< word.length; i++) {
        if (word[i] in letterCount ) {
            letterCount[word[i]]++;
        } else {
            letterCount[word[i]] =1;
        }        
    } 
    return letterCount;
}

console.log(frequencyCounter("computer"));
// Do not edit this line;
module.exports = frequencyCounter;