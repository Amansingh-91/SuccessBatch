import { bookData } from "../data/bookData";
import MyBook from "./Book";

const BookList = () => {
  // array is valid child element
  const names = ["Aman", "Divya", "Dharam", "Jhon"];
  const formatedNames = names.map((n) => {
    return (
      <>
        <h1>{n}</h1>
        <p> Heloo </p>
      </>
    );
  });
  const handleClick = (e)=>{
    console.log(e.target);
  }
  return (
    <section className="bookList" onClick={handleClick}>
      {/* <Book imageUrl={firstBook.imageUrl} author={firstBook.author} title = {firstBook.title} price = {firstBook.price}></Book>
        <Book {...secondBook}></Book> */}
      {/* {names}
        {formatedNames} */}
      {/* {temp} */}

      {bookData.map((book) => {
        return <MyBook key={book.id} {...book}></MyBook>;
      })}
    </section>
  );
};

export default BookList;
