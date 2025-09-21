const jungle = "L    LZ L L Z"
const jungleLength = jungle.length
let distance = 0
let closestDistance = Infinity
let lion = NaN
let zebra = NaN

for(let lionPosition = 0 ; lionPosition < jungleLength ; lionPosition++ ){   
    if (jungle[lionPosition]=== "L"){
        lion = lionPosition
        for (let zebraPosition = 0 ;zebraPosition < jungleLength ; zebraPosition++){
            
            if (jungle[zebraPosition]==="Z"){
                zebra = zebraPosition
                distance = lion > zebra ? lion - zebra : zebra - lion
                closestDistance = distance < closestDistance ? distance : closestDistance
            }
        }
    }
}

closestDistance=lion ? (zebra ?closestDistance - 1:-1):-1;

console.log("for ",jungle , "the closest distance is ",closestDistance);
