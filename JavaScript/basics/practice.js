console.log("Lets practice");

// create link to/selecting  the element

const div= document.querySelector("#root");

// create elements

const h1 = document.createElement("h1");
const para = document.createElement("p");

// adding content to the newly created elements

h1.textContent = "This is my new Heading";

para.textContent = "this is just some random text for the paragraph"

div.appendChild(h1);
div.appendChild(para);

