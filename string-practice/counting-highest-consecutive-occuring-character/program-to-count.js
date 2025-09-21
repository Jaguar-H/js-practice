const input = "XXX00XXQQRRRRRR"
const limit  = input.length 
let currentLetter = ""
let previousLetter = ""
let repetedString = ""
let   counter = 0 
let highestCount  = 0 

for(let letter = 0 ; letter < limit ; letter ++  ){
    currentLetter = input[letter]

    if (currentLetter !== previousLetter){
        highestCount = counter > highestCount ? counter : highestCount
        counter = (counter * 0 ) + 1
        previousLetter = currentLetter
    }else{
        counter += 1
        highestCount = counter > highestCount ? counter : highestCount
        previousLetter = currentLetter
    }

}
console.log("the highest count of a string repeating consequtively is :",highestCount);

