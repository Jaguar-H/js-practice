const number = 8
const subString = 10 // if you want to Write a SubString with leading "0" Change it with "2" eg : "00" to "22"

let copyOfNumber = number 
let remainder = 0 
let placeValue = 1
let binary = 0 

//number to binary  and changing "0" to "2"
while (copyOfNumber > 0){

    remainder = copyOfNumber % 2
    binary = (remainder === 0) ? binary + (2 * placeValue ) : binary + (remainder * placeValue )
    
    
    placeValue = placeValue * 10 
    copyOfNumber = (copyOfNumber - remainder )/2
}

placeValue = 1

console.log("the binary number : ", binary);

// counting length substring and converting "0" to "2"

let newSubString = 0
let lengthOfSubString = 0
let copyOfSubString = subString
let SubStringIsNotZero = true

while (copyOfSubString > 0) {

    remainder = copyOfSubString % 10
    copyOfSubString = (copyOfSubString - remainder)/10

    if (remainder === 0) {
        newSubString=newSubString + ( 2 * placeValue)
     } else {
        newSubString = newSubString + (remainder * placeValue)
     } 
    
    placeValue = placeValue * 10
    lengthOfSubString ++ 

}
placeValue = 1
console.log("length of Substring ;",lengthOfSubString);


//Counting number of times Substring repeated 

let copyOfBinary = binary
let comparisionNumber = 0 
let timesRepeated = 0

while (binary > 0){
    copyOfBinary = binary
    for (let a = 0 ; a < lengthOfSubString ; a++){
        remainder = copyOfBinary % 10
        
        copyOfBinary = (copyOfBinary - remainder) / 10
        if (remainder ===0){
            comparisionNumber = comparisionNumber + (2 * placeValue)
        }else {
            comparisionNumber = comparisionNumber + (remainder*placeValue)
            
        }

        placeValue = placeValue * 10
    }
    

    timesRepeated=(comparisionNumber === newSubString)? timesRepeated+=1 : timesRepeated

    remainder = binary%10
    binary = (binary - remainder)/10

    comparisionNumber = 0 
    placeValue = 1
    
}
console.log("The number of times SubString is Repeated is : ", timesRepeated);
      
