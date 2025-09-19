const input = 123456789

let copyOfInput = input 
let remainder = 0 
let sum = 0 

console.log("input     >",input);


while(copyOfInput > 0){

    remainder = copyOfInput % 10
    
    console.log("Remainder + ",remainder);
    
    copyOfInput = copyOfInput - remainder
    copyOfInput = copyOfInput/10
    sum = sum + remainder
    
    
}


console.log("Result    =",sum)
