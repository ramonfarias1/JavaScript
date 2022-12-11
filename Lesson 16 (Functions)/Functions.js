function calculateEvenOrOdd(n = 0){
    if (n % 2 == 0){
        return 'even'
    } else {
        return 'odd'
    }
}
console.log(calculateEvenOrOdd(20))

function addNumbers(n1 = 0, n2 = 0){
    return n1 + n2
}
console.log(addNumbers(5, 3))

let v = function (x){
    return x*2
}

console.log(v(5))

function calculateFactorial(f){
    let fat  = 1
    for ( let c = f ; c > 1 ; c-- ){
        fat*= c
    }
    return fat
}
console.log(calculateFactorial(5))

//Recursividade
//5! = 5 * 4 * 3 * 2 * 1
//5! = 5 * 4!
//n! = n! * (n! - 1)
// 1! = 1
function calcFactorial(f2){
    if (f2 == 1){
        return 1
    } else {
        return f2 * calcFactorial(f2 - 1)
    }
}
console.log(calcFactorial(5))