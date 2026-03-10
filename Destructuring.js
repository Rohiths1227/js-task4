//Array destructuring
let numbers = [10,20,30,40];

let [a,b,c,d] = numbers;

console.log(a,b,c,d);


//Object destructuring
let emp = {
    name:"Rohith",
    role:"Full Stack Developer",
    salary:40000
};

let {name,role,salary} = emp;

console.log(name,role,salary);


//first and last element
let arr2 = [1,2,3,4,5];

let [first,,,,last] = arr2;

console.log(first,last);


//nested array
let arr3 = [1,2,[3,4]];

let [x,y,[z,w]] = arr3;

console.log(x,y,z,w);