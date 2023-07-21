// Promises are tasks whic will take some time to complete

// promises either get resolved or rejected

const networkReq = (url)=>{
        const myPromise = new Promise((resolve,reject)=>{
        const http = new XMLHttpRequest();
        const handleChange = (e)=>{
            if(e.target.readyState === 4 && e.target.status === 200){
                resolve(e.target.responseText);
            }
            else if(e.target.readyState === 4){
                reject("Error occured");
            }
        };
        http.addEventListener("readystatechange",handleChange)
        http.open("GET",url);
        http.send();
    })

    return myPromise;
}


networkReq("https://jsonplaceholder.typicode.com/todos/1").then(data => {
    console.log(data);
    return networkReq("https://jsonplaceholder.typicode.com/todos/10");
}).then(data=>{
    console.log(data);
})
.catch(err=>{
    console.log(err);
})