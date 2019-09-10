import React from 'react';
import './App.css';
import {useState} from "react";

function App() {
  const [result, setResult] = useState(0);
  const [selectedOperator, setOperator] = useState("");


  const handleClick = (e) => {
    if(e.target.matches("button")){
      const key = e.target;
      const action = key.dataset.action;
      const keyContent = key.textContent;


      if(!action){
        if(result === 0){
          setResult(keyContent);
        } else {
          setResult(result + keyContent)
        }
      }

      const styleCliked = {
        backgroundColor: "#FFFFFF",
        color: "#FF9500",
      };

      const styledNormal = {
        backgroundColor: "#FF9500",
        color: "#FFFFFF",
      };

      const typeOfAction = ["-", "+", "÷", "x"];

      if (typeOfAction.indexOf(keyContent) >=0){
        setOperator(keyContent)
      } else {
        setOperator("")
      }

      if(action === "decimal"){
        setResult(result + ",")
      }

    }
  };

  return (
      <div className="container">
        <div className="calculator">
          <div className="calculator__display">{result}</div>
          <div onClick={handleClick} className="calculator__keys">
            <button data-action="clear" className="gray">AC</button>
            <button className="gray" data-action="plus_minus">+/-</button>
            <button className="gray" data-action="percent">%</button>
            <button className={selectedOperator === "÷" ? "clicked" : "key--operator"} data-action="divide">÷</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button className={selectedOperator === "x" ? "clicked" : "key--operator"} data-action="multiply">x</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button className={selectedOperator === "-" ? "clicked" : "key--operator"} data-action="subtract">-</button>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button className={selectedOperator === "+" ? "clicked" : "key--operator"} data-action="add">+</button>
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
