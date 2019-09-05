import React from 'react';
import './App.css';
import {useState} from "react";

function App() {
  const [result, setResult] = useState(0);
  const [down, setDown] = useState(false);

  const handleClick =(e) => {
    if(e.target.matches("button")){
      const key = e.target;
      const action = key.dataset.action;
      const keyContent = key.textContent;

      !action && console.log("number key!");
      if(!action){
        if(result === 0){
          setResult(keyContent);
        } else {
          setResult(result + keyContent)
        }
      }
      if (action === "add" || action === "subtract" || action === "multiply" || action === "divide"){
        console.log("operator key!");
        setDown(true);

      }
      action === 'decimal' && console.log('decimal key!');
      if(action === "decimal"){
        setResult(result + ".")
      }
      action === 'clear' && console.log('clear key!');
      action === 'calculate' && console.log('equal key!');
    }
  }

  return (

      <div className="container">
        <div className="calculator">
          <div className="calculator__display">{result}</div>
          <div onClick={handleClick} className="calculator__keys">
            <button data-action="clear" className="gray">C</button>
            <button className="gray" data-action="plus_minus">+/-</button>
            <button className="gray" data-action="percent">%</button>
            <button className="key--operator" data-action="divide">÷</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button className="key--operator" data-action="multiply">&times;</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button className="key--operator" data-action="subtract">-</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button className="key--operator" data-action="add">+</button>
            <button id="zero_left">0</button>
            <button id="zero_right"/>
            <button data-action="decimal">,</button>
            <button className="key--equal" data-action="calculate">=</button>
          </div>
        </div>
      </div>


  );
}

export default App;
