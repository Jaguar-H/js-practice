let Product = 1;
const number = 5;
if (number === 0){
    console.log("the Factorial is 1");
}else if (number < 0){
    console.log("don't enter a negative number :( ");
     
}
else{
    for(let mul = 1 ; mul <= number ; mul++){
        Product = mul * Product
        console.log("the number is : ",mul,"the Factorial is : ",Product );
        
    }
}
