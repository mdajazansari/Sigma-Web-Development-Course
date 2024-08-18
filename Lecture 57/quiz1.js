// 1. Write a JS program to store name, phone number and marks of a student using objects?


let student = {
    "name": "Ajaz",
    "class": "6th",
    "phone number": "8319599535",
    "percentage": 95,    
}

console.log(student);


//2. Create a variable of type string and try to add a number to it

let a = "I want to master JS in ";
let b = 3;
let c = " months";

console.log(a + b + c);


//3. Use typeof operator to find the data type of the string in the above question

let d = a + b + c;
console.log(typeof(d));


//4. Create a const object in java script, can you change it to hold a number later

// MY WRONG CODE
// const country = {
//     "india": "delhi",
//     "japan": "tokoyo",
//     "england": "london",
// }

// console.log(country);

// let country = {
//     "india": 140000000
//     "japan": 19000000
//     "england": 35000000
// }

// console.log(country);

// Gemini Correct Code

const country = {
    "india": "delhi",
    "japan": "tokyo",
    "england": "london"
};

// You can modify the properties of a const object
country.india = 140000000;
country.japan = 19000000;
country.england = 35000000;

console.log(country);

// Explanation:

// In this example, we create a const object named country. We can then modify its properties using dot notation. This is allowed because we're not changing the reference of the country object itself, but rather the values of its properties.

// Key points to remember:

// const variables cannot be reassigned.
// You can modify the properties of a const object.
// Use dot notation to access and modify object properties.


//Try to add a new key in the above program, are you able to do this?
// Here are two countries that share the same capital city:

// South Africa and Lesotho: Both countries have their capital in Pretoria.
// Netherlands and Curaçao: Both countries have their capital in Amsterdam.

let olympics1928 = "Netherland";
country.maldives = "male";
country[olympics1928] = "Amsterdam";
console.log(country);

// Key points:

// Both methods achieve the same result: adding a new key-value pair to the object.
// Use dot notation if you know the key name in advance.
// Use bracket notation if the key name is stored in a variable or computed at runtime.



