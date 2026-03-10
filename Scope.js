//Global variable access
let company = "Stackly";

function showCompany(){
    console.log("Company:", company);
}
showCompany();


//var vs let vs const
if(true){
    var a = 100;
    let b = 120;
    const c = 330;

    console.log(a,b,c);
}

console.log(a);

//Local scope
function testScope(){
    let message = "Hello";
    console.log(message);
}
testScope();

