import React, { useState } from 'react';

const Calculator = () => {
const [display, setDisplay] = useState('0');

const handleInput = (value) => {
    setDisplay(prevDisplay => prevDisplay === '0' ? value : prevDisplay + value);
};

const clearDisplay = () => {
    setDisplay('0');
};

const calculateResult = () => {
    try {
    setDisplay(eval(display).toString());
    } catch (error) {
    setDisplay('Error');
    }
};

return (
    <div className="calculator">
    <div className="brand">CALCULADORA</div>
    <div className="display">{display}</div>
    <div className="buttons">
        <button onClick={clearDisplay}>C</button>
        <button onClick={() => handleInput('7')}>7</button>
        <button onClick={() => handleInput('8')}>8</button>
        <button onClick={() => handleInput('9')}>9</button>
        <button onClick={() => handleInput('/')}>÷</button>
        <button onClick={() => handleInput('4')}>4</button>
        <button onClick={() => handleInput('5')}>5</button>
        <button onClick={() => handleInput('6')}>6</button>
        <button onClick={() => handleInput('*')}>×</button>
        <button onClick={() => handleInput('1')}>1</button>
        <button onClick={() => handleInput('2')}>2</button>
        <button onClick={() => handleInput('3')}>3</button>
        <button onClick={() => handleInput('-')}>-</button>
        <button onClick={() => handleInput('0')} className="span-two">0</button>
        <button onClick={() => handleInput('.')}>.</button>
        <button onClick={() => handleInput('+')}>+</button>
        <button className="special" onClick={calculateResult}>=</button>
    </div>
    </div>
);
};

export default Calculator;