
// Adding and chaging content

const mypara = document.querySelector("body > p.mypara");
// access the content of the element

// to access the text content
console.log(mypara.innerText);

// to access the Html
// console.log(mypara.innerHTML);

// to access text content even the hidden one
// console.log(mypara.textContent);

// change the content

mypara.textContent = "Humans are beautiful being. but Dog are cuter";

// adding Html Element to Dom

const newElement = document.createElement("div");

newElement.innerHTML = "<h1>I am newly added</h1>"

const body =  document.querySelector("body");

body.appendChild(newElement);

newElement.innerHTML += "<p>I am para</p>"

// removing element from dom
const childToBeRemoved = document.querySelector("div h1");

console.log(childToBeRemoved);

childToBeRemoved.remove();