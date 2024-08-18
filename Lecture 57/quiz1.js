// Write a JS program to store name, phone number and marks of a student using objects?


let student = {
    "name": "Ajaz",
    "class": "6th",
    "phone number": "8319599535",
    "percentage": 95,    
}

console.log(student);


//Create a variable of type string and try to add a number to it

let a = "I want to master JS in ";
let b = 3;
let c = " months";

console.log(a + b + c);


//Use typeof operator to find the data type of the string in the above question

let d = a + b + c;
console.log(typeof(d));


//Create a const object in java script, can you change it to hold a number later

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