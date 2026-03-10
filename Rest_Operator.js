//sumAll
function sumAll(...numbers){
    let sum = 0;

    for(let num of numbers){
        sum += num;
    }

    return sum;
}

console.log(sumAll(1,2,3,4));


//first + rest
function show(first,...rest){
    console.log("First:", first);
    console.log("Rest:", rest);
}

show(10,20,30,40);


//total bill
function totalBill(...prices){
    let total = prices.reduce((a,b)=>a+b,0);
    console.log("Total Bill:", total);
}

totalBill(100,200,300);