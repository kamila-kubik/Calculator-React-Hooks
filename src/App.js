import React from 'react';
import './App.css';
import Display from "./components/Display";
import Buttons from "./components/Buttons"
import {useState} from "react";

const App = () => {

  const [selectedOperator, setOperator] = useState("");
  const [result, setResult] = useState(0);
  const [override, setOverride] = useState(false);
  const [AC, setAC] = useState("AC");

  const calculate = (n1, n2, op) => {
    let result = 0;
    switch (op) {
      case "+": return result = n1+n2;
      case "-": return result = n1-n2;
      case "*": return result = n1*n2;
      case "/": return result = n1/n2;
    }
  };

  const handleClick = (keyContent) => {
    const typeOfAction = ["-", "+", "/", "*"];
    if (typeOfAction.indexOf(keyContent) >=0){
      setOperator(keyContent);
      setOverride(true);
    } else {
      setOperator("")
    }
    const display = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ','];
    if(display.indexOf(keyContent) >=0) {
      if (override === true){
        setResult(keyContent);
      } else {
        if (result === 0){
          setResult(keyContent);
        } else {
          setResult(result + keyContent);
        }
      }
      setOverride(false);
    }

    if (keyContent === ","){
      if (result === 0){
        setResult("0,")
      }
    }

    if (keyContent === "%"){
      setResult(result/100);
    }
    if(keyContent === "+/-"){
      result > 0 && setResult(result - 2*result);
      result < 0 && setResult(result + (-result) + (-result));

    }

    keyContent !== "AC" ? setAC("C") : setAC("AC");
    if (keyContent === "AC"){
      setResult(0);
    }

  };

  console.log(result);

  return (
      <div className="container">
        <div className="calculator">
          <Display result={result}/>
          <Buttons click={handleClick} operator={selectedOperator} ac={AC}/>
        </div>
      </div>


  );
};

export default App;
