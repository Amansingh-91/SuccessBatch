// Apply css using Dom 


const myHeading = document.querySelector("body > h1.mypara");
console.log(myHeading);
// apply css property
myHeading.style.color = "red";
myHeading.style.backgroundColor ="yellow";
// remove css property
myHeading.style.color = "";
myHeading.style.margin = "0";

// update css
myHeading.style.fontSize = "24px";
