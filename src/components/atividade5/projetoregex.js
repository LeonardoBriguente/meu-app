import React, { useState } from 'react';
// import "projeto.css";

export default function Projeto() {
  const [value, setValue] = useState(0);
  const [text, setText] = useState('');
  const [charStats, setCharStats] = useState({
    length: 0,
    alphabets: 0,
    numbers: 0,
    symbols: 0,
    spaces: 0
  });

  const updateValue = (operation) => {
    let newValue;
    switch (operation) {
      case '+':
        newValue = value + 1;
        break;
      case '-':
        newValue = value - 1;
        break;
      case '*':
        newValue = value * 2;
        break;
      case '/':
        newValue = value / 2;
        break;
      case 'x^2':
        newValue = value * value;
        break;
      case 'x^3':
        newValue = value * value * value;
        break;
      case '0':
        newValue = 0;
        break;
      default:
        newValue = value;
    }
    setValue(newValue);
  };

  const handleTextChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);
    const alphabets = (inputText.match(/[a-zA-Z]/g) || []).length;
    const numbers = (inputText.match(/[0-9]/g) || []).length;
    const symbols = (inputText.match(/[^a-zA-Z0-9\s]/g) || []).length;
    const spaces = (inputText.match(/\s/g) || []).length;
    setCharStats({
      length: inputText.length,
      alphabets,
      numbers,
      symbols,
      spaces
    });
  };

  return (
    <div className="App">
      <h1>Dinâmica - REGEX</h1>
      <h2>Mult Functional Counters</h2>
      <h3>Value: {value}</h3>
      <div className="buttons">
        <button onClick={() => updateValue('+')}>+</button>
        <button onClick={() => updateValue('-')}>-</button>
        <button onClick={() => updateValue('*')}>*</button>
        <button onClick={() => updateValue('/')}>/</button>
        <button onClick={() => updateValue('x^2')}>x²</button>
        <button onClick={() => updateValue('x^3')}>x³</button>
        <button onClick={() => updateValue('0')}>0</button>
      </div>
      <h3>Character Counter</h3>
      <input
        type="text"
        value={text}
        onChange={handleTextChange}
        placeholder="Digite algo..."
      />
      <div className="charStats">
        <p>Text Length: {charStats.length}</p>
        <p>Alphabets: {charStats.alphabets}</p>
        <p>Numbers: {charStats.numbers}</p>
        <p>Symbols: {charStats.symbols}</p>
        <p>Spaces: {charStats.spaces}</p>
      </div>
    </div>
  );
}