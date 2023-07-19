// Document Object Model (DOM)
// it is the model created by the web browser

// console.log(document);

// events basics

const myHeading = document.querySelector("body > h1.mypara");

const secondHeading = document.querySelector("#second");

const mypara = document.querySelector("body > p:nth-child(2)");
console.log(myHeading);


// adding event Listener to element

// listening for click event
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
const handleEvent = (event)=>{
    // console.log(event);
    event.target.style.color = getRandomColor();

}


myHeading.addEventListener("mouseover",handleEvent)
let flag =  false;
secondHeading.addEventListener("click",(e)=>{
    // console.log(e);
    if(flag){
        e.target.innerText = "Hello Aman";
        flag = false;
    }
    else{
        e.target.innerText = "Random text";
        flag = true;
    }
    e.target.style.color = getRandomColor();
    mypara.classList.toggle("hide");
    mypara.style.color = getRandomColor();
})







