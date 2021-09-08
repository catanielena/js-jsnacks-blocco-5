function reverse(str) {
    var strReverse = "";
    for (let i = str.length - 1; i >= 0; i--) {
        strReverse += str[i];
    }
    return strReverse;
};
var newStr = "ciao";
newStr = reverse(newStr);
console.log(newStr);