import React, { useState, useEffect } from 'react';
import Button from './Button';

function Calculator() {
const [display, setDisplay] = useState('0');

function handleInput(value) {
    if (display === '0') {
    setDisplay(value);
    } else {
    setDisplay(display + value);
    }
}

function clearDisplay() {
    setDisplay('0');
}

function calculateResult() {
    try {
    setDisplay(eval(display).toString());
    } catch (error) {
    setDisplay('Error');
    }
}

useEffect(() => {
    function handleKeyPress(event) {
    const key = event.key;
    if (key >= '0' && key <= '9') {
        handleInput(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        handleInput(key);
    } else if (key === '=' || key === 'Enter') {
        calculateResult();
    } else if (key === 'Escape') {
        clearDisplay();
    }
    }

    document.addEventListener('keydown', handleKeyPress);


}, []); 

return (
    <div className="calculator">
    <div className="brand">CALCULADORA</div>
    <div className="display">{display}</div>
    <div className="buttons">
        <Button onClick={clearDisplay}>C</Button>
        <Button onClick={() => handleInput('7')}>7</Button>
        <Button onClick={() => handleInput('8')}>8</Button>
        <Button onClick={() => handleInput('9')}>9</Button>
        <Button onClick={() => handleInput('/')}>/</Button>
        <Button onClick={() => handleInput('4')}>4</Button>
        <Button onClick={() => handleInput('5')}>5</Button>
        <Button onClick={() => handleInput('6')}>6</Button>
        <Button onClick={() => handleInput('*')}>*</Button>
        <Button onClick={() => handleInput('1')}>1</Button>
        <Button onClick={() => handleInput('2')}>2</Button>
        <Button onClick={() => handleInput('3')}>3</Button>
        <Button onClick={() => handleInput('-')}>-</Button>
        <Button onClick={() => handleInput('0')}>0</Button>
        <Button onClick={() => handleInput('.')}>.</Button>
        <Button onClick={calculateResult}>=</Button>
        <Button onClick={() => handleInput('+')}>+</Button>
    </div>
    </div>
);
}

export default Calculator;