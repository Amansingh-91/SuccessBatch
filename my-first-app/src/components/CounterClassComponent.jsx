import React from "react";
class CounterClassComponent extends React.Component {
    constructor(props){
      super(props);
      this.state = {counter: 0};
    }
    render() {
      return (
      <>
        <h2>Counter</h2>
        <button style={{"margin":"20px"}} onClick={()=>{this.setState({counter : (this.state.counter -1)})}}>decrease</button>
        {this.state.counter}
        <button style={{"margin":"20px"}} onClick={()=>{this.setState({counter : (this.state.counter + 1)})}}>increase</button>
      </>
      )
    }
  }

  export default CounterClassComponent;