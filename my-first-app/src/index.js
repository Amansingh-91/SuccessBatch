import React from "react";
import ReactDOM  from "react-dom/client";

const bookData = [
  {
    imageUrl :"https://images-eu.ssl-images-amazon.com/images/I/411yaMigwbL._AC_UL600_SR600,400_.jpg",
  title :"THE 48 LAWS OF POWER",
  author :"Robert Greene",
  price :"569.00",
  },
  {
    imageUrl :"https://images-eu.ssl-images-amazon.com/images/I/51bVNTqHFlL._AC_UL300_SR300,200_.jpg",
  title :"The Alchemist",
  author :"Paulo Coelho",
  price :"208.00",
  },
  {
    imageUrl :"https://images-eu.ssl-images-amazon.com/images/I/71jWK5-fBML._AC_UL600_SR600,400_.jpg",
  title :"Bhagvad Gita As It Is English New Edition",
  author :"A. C. Bhaktivedanta Swami Prabhupad",
  price :"348.00",
  },
  {
    imageUrl :"https://images-eu.ssl-images-amazon.com/images/I/81BE7eeKzAL._AC_UL600_SR600,400_.jpg",
  title :"Rich Dad Poor Dad",
  author :"Robert T. Kiyosaki",
  price :"323.00",
  }
]


const Book =(uncleJhon)=>{

  return (
    <div className="book">
      <img src={uncleJhon.imageUrl} alt="book image"></img>
      <h3>{uncleJhon.title}</h3>
      <h6>{uncleJhon.author}</h6>
      <h5>{uncleJhon.price}</h5>
    </div>
  )
}

const names = ["Aman","Divya","Dharam","Jhon"];
const formatedNames = names.map(name=>{
  return <h1>{name}</h1>
})
const BookList = ()=>{
  return (
    <section>
      {/* <Book imageUrl={firstBook.imageUrl} author={firstBook.author} title = {firstBook.title} price = {firstBook.price}></Book>
      <Book {...secondBook}></Book> */}
      {/* {names}
      {formatedNames} */}
      

    </section>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList></BookList>);