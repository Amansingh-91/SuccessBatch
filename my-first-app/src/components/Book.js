const Book =(props)=>{
    const {imageUrl,title,author,price} = props;
    const handleMouseEnter = (e)=>{
      console.log(e.target.innerText);
    }
    return (
      <div className="book">
        <img src={imageUrl} alt="book image"></img>
        <h3>{title}</h3>
        <h6 onMouseEnter={handleMouseEnter}>{author}</h6>
        <h5 style={{"color":"red"}}>{price}</h5>
      </div>
    )
}

export default Book;
  
// const Book =(uncleJhon)=>{

//   return (
//     <div className="book">
//       <img src={uncleJhon.imageUrl} alt="book image"></img>
//       <h3>{uncleJhon.title}</h3>
//       <h6>{uncleJhon.author}</h6>
//       <h5 style={{"color":"red"}}>{uncleJhon.price}</h5>
//     </div>
//   )
// }