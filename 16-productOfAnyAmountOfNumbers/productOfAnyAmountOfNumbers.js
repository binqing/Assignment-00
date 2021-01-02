function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
    var product =1;
    for (var i =0; i<args.length; i++) {
        product = product* args[i];
    }
    return product;
}

console.log(productOfAnyAmountOfNumbers(2,4,6));

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;