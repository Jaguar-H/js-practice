const numbertocheck = 23;
let isPrime = false 
let suffix = ""

for(let x = 2 ; x <= (numbertocheck / 2) ; x++){
    if (numbertocheck % x !== 0){
        isPrime = true
    }
}
suffix = isPrime ? "is Prime" : "Not Prime "

console.log(numbertocheck , suffix );
