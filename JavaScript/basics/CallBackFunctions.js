// callback function
// functions which are passed as argument to other functions

const myfunc = (data,cb)=>{
    cb(data);
}


const PunchIn = (listOfEmp=[])=>{
    listOfEmp.forEach((emp)=>{
        console.log(`${emp} , welcome Back`);
    })
}


// PunchIn(["Aman","Divya","Dharam"]);

const PunchOut = (listOfEmp=[])=>{
    listOfEmp.forEach((emp)=>{
        console.log(`${emp} , Have a nice day`);
    })
}


// PunchOut(["Aman","Divya","Dharam"]);

const promotion = (emp)=>{
    console.log("you have been promoted, Congratulations!");
}

// promotion("Aman")


myfunc(["Aman","Divya","Dharam"],(listOfEmp=[])=>{
    listOfEmp.forEach((emp)=>{
        console.log(`${emp} , Have a nice day`);
    })
});