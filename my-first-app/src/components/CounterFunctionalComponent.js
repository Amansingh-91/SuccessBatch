import React,{useState} from "react";


const CounterFunctionalComponent = () => {
  // let counter = 0;
  const [counter,setCounter] = useState(0);
  return (
    <div>
      <h1>Counter functional</h1>
      <button
        style={{ margin: "20px" }}
        onClick={()=>{
          setCounter(counter  - 1);
        }}
      >
        decrease
      </button>
      {counter}
      <button
        style={{ margin: "20px" }}
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        increase
      </button>
      <br/>
      <br/>
      <h1>Complex Counter functional</h1>
      <button
        style={{ margin: "20px" }}
        onClick={()=>{
          setTimeout(()=>{
            setCounter(counter  - 1);
          },2000);
        }}
      >
        decrease
      </button>
      {counter}
      <button
        style={{ margin: "20px" }}
        onClick={() => {
          setTimeout(()=>{
            setCounter((curr)=>{
              return curr +1;
            });
          },2000);
        }}
      >
        increase
      </button>
    </div>
  );
};

export default CounterFunctionalComponent;
