import React from "react";
// first component
// rules to create component functions
// name of the function is always capitalized
// it would always return either jsx or react element

// jsx
// jsx rules
// it should always return single element
// to provide classes we use className tag
// always close all html elements


function Greeting(){
    return <h1>Hello Friends</h1>;
  }
  
  const Greet = ()=>{
    return (
      <article className="dark" style={{"fontSize":"24px"}}>
  
        <h1>Aman Saini</h1>
        <p>React Tutorial</p>
        <Greeting></Greeting>
        
      </article>
      // <React.Fragment>
      //   <h1>Aman Saini</h1>
      //   <p>React Tutorial</p>
      // </React.Fragment>
  
    );
  }
  // nested Components
  const GreetMultipleTime = ()=>{
      return (
        <>
          <Greet></Greet>
          <Greet></Greet>
          <Greet></Greet>
          <Greet></Greet>
  
        </>
      )
  }