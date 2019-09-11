import React from 'react';
import './App.css';
import Display from "./components/Display";
import Buttons from "./components/Buttons"
import {useState} from "react";

const App = () => {

  const [selectedOperator, setOperator] = useState("");
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState([]);

  const handleClick = (keyContent) => {
    console.log(keyContent);
    const typeOfAction = ["-", "+", "/", "*"];
    if (typeOfAction.indexOf(keyContent) >=0){
      setOperator(keyContent);
    } else {
      setOperator("")
    }
    const display = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ','];
    if(display.indexOf(keyContent) >=0) {
      if (result === 0){
        setResult(parseFloat(keyContent))
      } else {
        setResult(result + keyContent);
      }
    }

    if (keyContent === "AC"){
      setResult(0);
    }

    if (keyContent === ","){
      if (result === 0){
        setResult("0,")
      }
    }

  };

  console.log(result);
  return (
      <div className="container">
        <div className="calculator">
          <Display result={result}/>
          <Buttons click={handleClick} operator={selectedOperator}/>
        </div>
      </div>


  );
};

export default App;
