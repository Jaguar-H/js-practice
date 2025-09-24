const inputString = "hello world";
let newString = "";
const subString = "rl";
let editedString = "";
let position = 0;

for(let each = 0; each < inputString.length; each++){
    
    position = each
    for(let j = 0; j < subString.length; j++){
        newString = newString+ inputString[position];

        position++;
    }
    
    if (newString === subString){
        each = position-1
        newString = "";
    }else{
        editedString += inputString[each]
        newString = ""
    }
    
}
console.log(editedString);
