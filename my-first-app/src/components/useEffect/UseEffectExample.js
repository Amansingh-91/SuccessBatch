import React,{useState,useEffect} from 'react'

const UseEffectExample = () => {
    const [data,setData] = useState("Loading...");
    const [data1,setData1] = useState("load");

useEffect(()=>{
    console.log("in use effect");
    if(data1 === "loaded"){
        fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => setData(json.title));
    }
},[data1]);


  return (
    <div>
        <h1>{data}</h1>
        <button onClick={()=>{
            setData1("loaded");
        }}>{data1}</button>
    </div>
  )
}

export default UseEffectExample