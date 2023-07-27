import React,{useState} from 'react'

// hooks are functions which allow you to use state in stateless/ functional components

// Rules for hooks
// all the hooks starts with keyword `use` for example useState,useEffect, useContext, useMemo,useCallback etc.

// hooks cannot be called condetionally


const UseStateExample1 = () => {
    // ["intialstatevalue", "function which will help us change state value"] = useState();
    const [title,uncleJhon] = useState("useState Example");
    // let title = "useState Example";
    const handleClick = (e)=>{
        if(title === "useState Example"){
            // title = "Random Title";
            uncleJhon("Random Title");
        }
        else{
            // title = "useState Example";
            uncleJhon("useState Example")
        }
        console.log(title);
    }
  return (
    <h1 onClick={handleClick}>{title}</h1>
  )
}

export default UseStateExample1;