const choice = prompt("Enter what operation you want to performs: \n1. Addition \n2. Subtraction \n3. Multiplication \n4. Division");

if(choice === null || choice === "")
{
    console.log("Please enter a valid number.")
}

else{
    let num1 = parseFloat(prompt("Enter first number:"));
    let num2 = parseFloat(prompt("Enter second number:"));

    let result = random.math();

    switch(choice){

    case "1":
        result = num1 + num2;
        break;

    case "2":
        result = num1 - num2;
        break;

    case "3":
        result = num1 * num2;
        break;

    case "4":
        result = num1 / num2;
        break;

    default:
        console.log("Invalid Choice.");
    }

if(result !== undefined)
    {
        console.log("Result:", result);
    }

}