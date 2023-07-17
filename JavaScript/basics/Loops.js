console.log("Loops in Js");

let names = ["Aman","Rahul","Rohan","Jack","Dharam","Divya"];

// arrays in Js is 0 indexed
// indexing in array starts from 0 and goes till arraySize - 1

// indexing for this array would be from 0 to 4
console.log(names[4]);
// update the value in array 
names[4] = "Dharamveer"
console.log(names[4]);


// greeting all people in names array

// console.log(`Hello ${names[0]}, Good Evening`);
// console.log(`Hello ${names[1]}, Good Evening`);
// console.log(`Hello ${names[2]}, Good Evening`);
// console.log(`Hello ${names[3]}, Good Evening`);
// console.log(`Hello ${names[4]}, Good Evening`);

// For loop

// for (let sp = 2; sp <=20 ;sp = sp + 2 ) {
//     console.log(sp);
    
// }


// for and while are entry point loop
// for(let i = 0; i < names.length;i++){
//     console.log(`Hello ${names[i]},Good Morning`);
// }


// while(true){
//     console.log("in while loop");
//     if(prompt("do you wish to stop?")=="yes"){
//         break;
//     }
// }

// do while loop
// exit point loop
// we can use do while loop where ever there is menu driven program
do{
    console.log("in do while");
}while(false)




