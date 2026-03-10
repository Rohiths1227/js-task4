//Named Function
function showMessage(){
    console.log("Named Function Example");
}
showMessage();


//Anonymous Function
let multiply = function(a,b){
    return a*b;
}
console.log(multiply(5,5));


//Arrow Function
let square = (num) => num*num;
console.log(square(12));