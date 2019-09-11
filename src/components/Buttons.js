import React, {Component} from 'react';
class Buttons extends Component {
    render() {
        const {click, operator} = this.props;
        return (
            <div className="calculator__keys">
                <button name={"AC"} onClick={(e) => click(e.target.name)} className="gray">AC</button>
                <button name={"+/-"} onClick={(e) => click(e.target.name)} className="gray">+/-</button>
                <button name={"%"} onClick={(e) => click(e.target.name)} className="gray">%</button>
                <button name={"/"} onClick={(e) => click(e.target.name)} className={operator === "/" ? "clicked" : "key-operator"}>÷</button>
                <button name={7} onClick={(e) => click(e.target.name)}>7</button>
                <button name={8} onClick={(e) => click(e.target.name)}>8</button>
                <button name={9} onClick={(e) => click(e.target.name)}>9</button>
                <button name={"*"} onClick={(e) => click(e.target.name)} className={operator === "*" ? "clicked" : "key-operator"}>x</button>
                <button name={4} onClick={(e) => click(e.target.name)}>4</button>
                <button name={5} onClick={(e) => click(e.target.name)}>5</button>
                <button name={6} onClick={(e) => click(e.target.name)}>6</button>
                <button name={"-"} onClick={(e) => click(e.target.name)} className={operator === "-" ? "clicked" : "key-operator"}>-</button>
                <button name={1} onClick={(e) => click(e.target.name)}>1</button>
                <button name={2} onClick={(e) => click(e.target.name)}>2</button>
                <button name={3} onClick={(e) => click(e.target.name)}>3</button>
                <button name={"+"} onClick={(e) => click(e.target.name)} className={operator === "+" ? "clicked" : "key-operator"}>+</button>
                <button name={0} onClick={(e) => click(e.target.name)} id="zero">0</button>
                <button name={","} onClick={(e) => click(e.target.name)}>,</button>
                <button name={"="} onClick={(e) => click(e.target.name)} className="key-equal">=</button>
            </div>
        )
    }


}

export default Buttons;