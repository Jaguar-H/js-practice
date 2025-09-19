const limit = 100
let divisor = 2
let primeCandidate = 2

while (primeCandidate < limit ){

    if (primeCandidate % divisor === 0 ){

        if (primeCandidate === divisor){

            console.log(primeCandidate ,"is a prime number ");
            primeCandidate++

            divisor = 2

        }else {

            console.log(primeCandidate,"is a composite number");
            primeCandidate++

            divisor = 2
            
        }
    }else{

        divisor = divisor + 1
    }
}
