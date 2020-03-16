import React from 'react';
import ReactDOM from 'react-dom';

const myElement = <h1> Hello world </h1>;
ReactDOM.render(myElement,document.getElementById('header'));


// JSX - JS and XML

const myExpression = <h1> the sum of 4 and 16 is {4+16} </h1>;
ReactDOM.render(myExpression,document.getElementById('expression'));


// class component

class Welcome extends React.Component{
  render(){
    return (
    <div>
      <h1>welcome {this.props.name}! to learning react.js</h1>
    </div>
      )
    }
}
ReactDOM.render(<Welcome name="Bob"/>,document.getElementById('welcome'));


// function component

function Welcome2(){
  return (
  <div>
    <h1>welcome from function component</h1>
  </div>
    )
}
ReactDOM.render(<Welcome2/>,document.getElementById('welcome2'));

// class constructor with state

class Person extends React.Component{
  constructor(){
    super();
    this.state = {
      name : "Daniel",
      age : 45
    }
  }

  render(){
    return(
      <div>
        <h1>my name is {this.state.name} </h1>
        <h1>my name is {this.state.age} </h1>
      </div>
    )
  }
}
ReactDOM.render(<Person/>,document.getElementById('classWithState'));
