//add(a)(b)(c)
function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
console.log(add(22)(3)(40));


//multiply(a)(b)(c)
function multiply(a){
    return function(b){
        return function(c){
            return a*b*c;
        }
    }
}
console.log(multiply(220)(33)(14));