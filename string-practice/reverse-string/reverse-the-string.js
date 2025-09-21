const inputString = "HIMASHU JAGURI"
const  indexValue =  inputString.length

let reverseString = "" 

for (let chartoPrint = 1 ; chartoPrint <= indexValue ; chartoPrint++){

    reverseString = reverseString + inputString[indexValue - chartoPrint]
}


console.log(inputString," is the reversed string of ", reverseString);
