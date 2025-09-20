const jungle = "L    LZ L L Z"
const limit = jungle.length
let distance = 0
let closestDistance = Infinity
let lion = NaN
let zebra = NaN

for(let i = 0 ; i < limit ; i++ ){   
    if (jungle[i]=== "L"){
        lion = i
        for (let j = 0 ;j < limit ; j++){
            
            if (jungle[j]==="Z"){
                zebra = j
                distance = lion > zebra ? lion - zebra : zebra - lion
                closestDistance = distance < closestDistance ? distance : closestDistance
            }
        }
    }
}

closestDistance=lion ? (zebra ?closestDistance - 1:-1):-1;

console.log("for ",jungle , "the closest distance is ",closestDistance);
