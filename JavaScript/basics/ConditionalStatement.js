console.log("Conditional Statements");
// decision making statements

// first conditional Statment is if
// if conditionl statement works on boolean value (true / false)

// if(conditions...){
//     block of code
// }
// alert("hello")


// Relational Operator
// loose equality  => ==
// strict equality => ===
// loose not equal => !=
// strict not equal => !==
// greater than => >
// less than => <
// greater than equal to =>  >=
// less than equal to =>  <=

// diff b/w loose and strict type

// let x = "12";
// let y = 12;

// if(x == y){
//     console.log("loose");
// }

// if(x === y){
//     console.log("strict");
// }

// TypeCasting is converting one datatype to another data type
// converting string to number

// let myNumericString = "123";
// let myConvertedNumber = Number(myNumericString);
// console.log(myConvertedNumber);



// let age = prompt("what is your age?");
// console.log(typeof(age));
// if(Number(age) === 18 ){
//     console.log("you are eligible");
// }

// i can read this code like 
// if age is equal to 18 then print you are eligible

// if(Number(age) > 17 ){
//     console.log("i am of legal agee to vote");
// }

// if age is greater than 17 then you print i am of legal age to vote

// ask user for name and Password

// let userName = prompt("Enter your User name");
// let password = prompt("Enter your password");
// nested if
// if(userName == "AmanSaini"){

//     if(password == "Aman123"){
//         console.log("You have successfully Logged in");
//     }
// }
// else{
//     console.log("Invalid userName");
// }

// Combine multiple conditons in if
// the we use Logical Operator
// there are two Logical operator
// and operator &&
// if using and operator.
// if any condition among the conditions become false , the complete condition become false

// or operator || 
// if using or operator.
// if any condition among the conditions become true , the complete condition become true

// A and B => compulsary
// A or B => choice

// if(userName == "AmanSaini" && password == "Aman123"){
//     console.log("You have successfully Logged in");
// }

// else if(userName == "aman@123.com" && password == "Aman123") {
//     console.log("You have successfully Logged in");
// }
// else if(userName == "aman@123.com" && password == "jack123") {
//     console.log("You have successfully Logged in");
// }
// else{
//     console.log("Invalid userName or password");
// }



// else if conditional statement 
// switch case


let marks = 50;
if(marks > 90 && marks <=100){
    console.log("You got A+ grade");
}
else if (marks > 80 && marks <=90) {
    console.log("You got A grade");
}
else if (marks > 70 && marks <=80) {
    console.log("You got B+ grade");
}
else{
    console.log("fail");
}

// Switch case workes with expression

let choice = "chips" ;

switch (choice) {
    case "chips":
        console.log("Bought chips");
        break; //jump statement
    case "coke":
        console.log("Bought coke");
        break;    

    default:
        console.log("invalid amount");
        break;
}
console.log("here");
