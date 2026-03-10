//createEmployee(name, role='Trainee')
function createEmployee(name, role="Trainee"){
    console.log("Employee Name:", name);
    console.log("Role:", role);
}
createEmployee("Rohith");


//calculateDiscount(price, discount=10)
function calculateDiscount(price, discount=10){
    let finalPrice = price - (price * discount / 100);
    console.log("Final Price:", finalPrice);
}
calculateDiscount(1000);


//orderFood(item, quantity=1)
function orderFood(item, quantity=1){
    console.log("Item:", item);
    console.log("Quantity:", quantity);
}
orderFood("Grill Chicken");