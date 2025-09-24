const inputString = "hello world";
let newString = "";
const subString = "lo";
let editedString = "";
let position = 0;
let eachChar = ""

while (eachChar < inputString.length) {
    position = each
    for (let j = 0; j < subString.length; j++) {
        newString = newString + inputString[position];
        position++;
    }
    
    if (newString === subString) {
        each = position - 1
        newString = "";
    } else {
        editedString += inputString[each]
        newString = ""
        eachChar++;
    }

}
console.log(editedString);
