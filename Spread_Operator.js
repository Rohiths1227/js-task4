//Merge arrays
let a = [1,2,3];
let b = [4,5,6];

let merged = [...a,...b];
console.log(merged);


//Clone array
let arr = [10,20,30];
let copy = [...arr];

console.log(copy);


//Merge objects
let obj1 = {name:"Rohith"};
let obj2 = {role:"Full Stack Developer"};

let result = {...obj1,...obj2};

console.log(result);