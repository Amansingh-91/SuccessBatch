import React from "react";
import ReactDOM  from "react-dom/client";
import "./index.css";
import BookList from "./components/BookList";
import CounterClassComponent from "./components/CounterClassComponent";
import CounterFunctionalComponent from "./components/CounterFunctionalComponent";
import UseStateExample1 from "./components/useState/useStateExample1";
import UseEffectExample from "./components/useEffect/UseEffectExample";
// hooks 
// there are two ways to create component
// functional component / stateless component
// class component / stateful components


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<UseEffectExample/>);