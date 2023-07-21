console.log("Network request");

console.log(1);
const http =new XMLHttpRequest();

http.addEventListener("readystatechange",(e)=>{
    
    if(e.target.readyState === 4 && e.target.status === 200){
        console.log(e.target.responseText);
    }
});

http.open("GET","https://jsonplaceholder.typicode.com/todos/2");

http.send();
console.log(2);