//Discount coupons
function* coupons(){
    yield "DISC100";
    yield "DISC25";
    yield "DISC31";
}

let c = coupons();

console.log(c.next().value);
console.log(c.next().value);
console.log(c.next().value);


//Developer messages
function* messages(){
    yield "Keep Coding";
    yield "Practice Daily";
    yield "Never Give Up";
}

let m = messages();

console.log(m.next().value);
console.log(m.next().value);
console.log(m.next().value);