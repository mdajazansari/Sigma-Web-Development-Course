let num = prompt("Enter a number you want a factorial of it:");

function factorial(number) {
    fact = 1;
    for (let index = 1; index <= number; index++) {   
        fact = fact * index;     //This means this: fact = fact + (fact * index);

    }
    return fact;
}

console.log(factorial(num))



// HARRY CODE:
// let a = 7

// function factorial(number){
//    let arr = Array.from(Array(number+1).keys())
//    let c = arr.slice(1,).reduce((a, b)=> a*b )
//    return c
// }


// function facFor(number){
//     let fac = 1;
//     for (let index = 1; index <= number; index++) {
//         fac = fac * index
//     }
//     return fac
// }
// console.log(factorial(a))
// console.log(facFor(a))