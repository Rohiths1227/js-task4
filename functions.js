//greetUser(name)
function greetUser(name){
    console.log("Welcome to Stackly, " + name);
}
greetUser("Rohith");


//calculateSalary(basic, bonus)
function calculateSalary(basic, bonus){
    return basic + bonus;
}
console.log("Total Salary:", calculateSalary(25000, 5000));


//checkEvenOdd(num)
function checkEvenOdd(num){
    if(num % 2 === 0){
        return "Even";
    } else {
        return "Odd";
    }
}
console.log(checkEvenOdd(7));


//findMax(a,b,c)
function findMax(a,b,c){
    return Math.max(a,b,c);
}
console.log("Largest:", findMax(10,20,15));


//calculateGST(price)
function calculateGST(price){
    return price + price*0.18;
}
console.log("Price with GST:", calculateGST(100));


//login(username,password)
function login(username,password){
    if(username === "admin" && password === "1234"){
        console.log("Login Successful");
    } else {
        console.log("Invalid Login");
    }
}
login("admin","1234");