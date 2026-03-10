//processData(callback)
function processData(callback){
    console.log("Processing...");
    callback();
}

function done(){
    console.log("Task Completed");
}

processData(done);


//calculate(a,b,operation)
function add(a,b){
    return a+b;
}

function calculate(a,b,operation){
    console.log(operation(a,b));
}

calculate(5,3,add);


//callback after calculation
function calculateSum(a,b,callback){
    let result = a+b;
    console.log("Result:", result);
    callback();
}

function finished(){
    console.log("Task Completed");
}

calculateSum(4,6,finished);


//callback with user data
function getUser(callback){
    let user = {name:"Rohith", role:"Full Stack Developer"};
    callback(user);
}

getUser(function(data){
    console.log(data);
});