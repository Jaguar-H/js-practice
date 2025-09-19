const numbertocheck = 0;
let isPrime = false 
let suffix = ""

if (numbertocheck <= 1){
    console.log("Can't check ",numbertocheck,"for prime");
    
}
else{
   for(let x = 2 ; x <= (numbertocheck / 2) ; x++){
    if (numbertocheck % x !== 0){
        isPrime = true
    }
} 
}

suffix = isPrime ? "is Prime" : "Not Prime "

console.log(numbertocheck , suffix );
