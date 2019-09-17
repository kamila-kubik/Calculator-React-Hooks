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
  const [number1, setN1] = useState(0);
  const [operator, setOper] = useState("");
  const [score, setScore] = useState(0);


  const calculate = (n1, op, n2) => {
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
      setN1(result);
      setOper(keyContent);
    } else {
      setOperator("")
    }

    const display = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
    if(display.indexOf(keyContent) >=0) {
      if (override === true){
        setResult(keyContent);
        keyContent === "." && setResult("0.");
      } else {
        if (result === 0){
          setResult(keyContent);
        } else {
          setResult(result + keyContent);
        }
      }
      setOverride(false);
    }

    if (keyContent === "."){
      if(result.indexOf(".") > -1){
      }
    }
    console.log(result);


    if (keyContent === "."){
      if (result === 0){
        setResult("0.")
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

    if (keyContent === "="){
      const number2 = result;
      if (operator === ""){
        setResult(result)
      } else {
        setResult(calculate(parseFloat(number1), operator, parseFloat(number2)));
      }
      setOverride(true);
    }

  };

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
