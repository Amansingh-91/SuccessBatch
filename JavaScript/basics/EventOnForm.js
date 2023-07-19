console.log("Events on Form");

const form = document.querySelector("form");

const handleSubmit  = (e)=>{
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(e.target[1].value);

    const email = e.target[0].value;
    const pass = e.target[1].value;

    if(email === "aman@123.com" && pass ==="1234"){
        const h1 = document.createElement("h1");
        h1.textContent = "Welcome Back, Aman";

        e.target.parentNode.appendChild(h1);
    }

}

form.addEventListener("submit",handleSubmit);
