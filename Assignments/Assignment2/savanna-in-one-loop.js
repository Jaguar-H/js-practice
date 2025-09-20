const jungle = "L   Z L Z"
const limit = jungle.length 

let distance = 0 
let closestDistance = 101

let lion = NaN
let zebra = NaN
let animal = 0 

for (animal ; animal < limit ; animal++){

    lion =  (jungle[animal] === "L") ? animal : lion
    zebra = (jungle[animal] === "Z") ? animal : zebra 
    
    if (zebra && lion){
        distance = (lion > zebra ? lion - zebra : zebra - lion) - 1

        closestDistance = distance < closestDistance ? distance : closestDistance

    }
    
}
closestDistance = closestDistance < 101 ? closestDistance : -1;
console.log("In the jungle ",jungle,"\nThe closest distance between a lion and zebra is ",closestDistance);

