console.log("asyncronous Js");

// syncronous nature
// performing tasks in sequence or one after another

// Blocking
// console.log(1);
// console.log(2);
// // let sum = 0;
// for (let i = 0; i < 100000; i++) {
//     // do somthing 
//     // sum += i;
//     console.log("hello");
// }
// // console.log(sum);
// console.log(3);
// console.log(4);

// async js

console.log(1);
console.log(2);
setTimeout(()=>{
    for (let i = 0; i < 100000; i++) {
            // do something
            console.log("hello");
        }
},2000);
console.log(3);
console.log(4);
