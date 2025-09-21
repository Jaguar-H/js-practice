const input = "XXX00XXQQRRRRRR"
const limit  = input.length 
let currentLetter = ""
let previousLetter = ""
let repetedString = ""
let   counter = 0 
let highestCount  = 0 
let repeatingString = ""
let highestRepeatingString = ""

for(let letter = 0 ; letter < limit ; letter ++  ){
    currentLetter = input[letter]

    if (currentLetter !== previousLetter){

        highestCount = counter > highestCount ? counter : highestCount
        highestRepeatingString = counter > highestCount ? repeatingString : highestRepeatingString
        
        counter = (counter * 0 ) + 1
        repeatingString = ""
        repeatingString += currentLetter
        previousLetter = currentLetter

    }else{

        counter += 1
        repeatingString += currentLetter
        previousLetter = currentLetter
        
        highestRepeatingString = counter > highestCount ? repeatingString : highestRepeatingString
        highestCount = counter > highestCount ? counter : highestCount

    }

}
console.log("the highest count of a string repeating consequtively is :",highestCount )
console.log("And the string is :", highestRepeatingString);


