let a = 75;
if (a % 3 == 0){
    console.log("Fizz");
}else if (a % 5 == 0){
    console.log("Buzz");
}else if (a % 3 == 0 && a % 5 == 0){
    console.log("FizzBuzz");
}else{
    console.log(a);
}

let b = 75;
if (b % 3 == 0 && b % 5 == 0){
    console.log("FizzBuzz");
}else if (b % 5 == 0){
    console.log("Buzz");
}else if (b % 3 == 0){
    console.log("Fizz");
}else{
    console.log(b);
}