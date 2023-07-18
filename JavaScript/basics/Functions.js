// functions in js
// normal function
// function declaration and defination
greet();
function greet(){
    console.log("Hello friend");
}

// function call

greet();

// functions with parameters 
// parameters are extra peice of info prvided to function 

function greetWithName(name,age) {
    console.log(`Hello ${name},and your age is ${age}`);
}

// arguments are the value for the paramenter
greetWithName("Aman",27);

greetWithName("Divya",26);

// function with default value for parameter
// parameter values should be provided in same sequence as in declaration of function
greetWithName(31);

function greetWithDefaultValue(name = "Jack") {
    console.log(`Hello ${name},Good evening`);
}

greetWithDefaultValue();
greetWithDefaultValue("Dharam");

// function with return type

function sumOfTwoNumbers(num1, num2){
    console.log(num1 + num2);
    return num1 + num2; //return is another jump statements
    
}
let sum = sumOfTwoNumbers(20,30);

console.log("sum ",sum);
// Function as an expression

// declarationand defination
// expfunction();
const expfunction = function(name="george"){
    console.log(`Hello ${name},Good evening`);
}

// function call

expfunction();

const checkEven = function (num){
    if(num % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(checkEven(11));
console.log(checkEven(28));


// arrow function

// const isEven = (num) => {
//     return num %2 === 0;
// };

const isEven = (num) => num %2 === 0;

console.log(isEven(13),"is even func");
console.log(isEven(20),"is even func");


const arrowFunc = (name = "jack",age) => {
    console.log(`Hello ${name},and your age is ${age}`);
}

arrowFunc("Jim",24);



