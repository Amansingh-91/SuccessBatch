// Selecting the element on dom
// qurerySelector allows you to select any single element on dom 
const heading = document.querySelector("h1");
console.log(heading);
const secondHeading = document.querySelector("#second");
console.log(secondHeading);

const mypara = document.querySelector("body > p:nth-child(2)");
console.log(mypara);

// querySelectorAll
const allHeading = document.querySelectorAll("h1");
console.log(allHeading);

// getElementByID
const linkById = document.getElementById("second");

console.log("selected with id",linkById);

// getElementsByClassName
const myparas = document.getElementsByClassName("mypara");

console.log(myparas);
// getElementsByTagName
const allPara = document.getElementsByTagName("p");

console.log(allPara);
