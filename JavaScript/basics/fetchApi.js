// fetch api used to make network request

// fetch("https://jsonplaceholder.typicode.com/todos/1").then(res=>{
//     console.log(res);
//     return res.json()
// })
// .then(uncle=>{
//     console.log(uncle);
// })
// .catch(err=>{
//     console.log(err);
// })

// fetch req  gives you promise. so promise is either rejected or resolved.
// if promise get resolved then we get response object. this response object contains info about response and also the data is emided in that response object. to extract that data from response object we use .json() method. this .json method again return you a promise. if that promise is resolved then we get data otherwise the promise gets rejected 

// async await

// async function always return promise
// await keyword will wait for your promise to be complete before the value is assigned to variable
async function greet(){
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await res.json();
    console.log(data);
}

console.log(1);
console.log(2);
greet();
console.log(3);
console.log(4);