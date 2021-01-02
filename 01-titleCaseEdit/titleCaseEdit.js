function titleCaseEdit(title) {
  // Insert code here;
    var str = title.toLowerCase().split(" ");
    for (var i=0; i<str.length; i++) {
        str[i] =str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }    
    return str.join(" ");
}

console.log(titleCaseEdit("the cow jumped over the moon"));
// Do not edit this line;
module.exports = titleCaseEdit;
