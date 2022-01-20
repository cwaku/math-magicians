import React, { useState } from 'react';
import calculate from '../logic/calculate';
import './Calculator.css';

const Calculator = () => {
  const [state, setState] = useState({});
  const { total, next, operation } = state;

  function handleClick(event) {
    try {
      setState({ ...state, ...calculate(state, event.target.textContent) });
    } catch (error) {
      return state;
    }
    return 0;
  }

  return (
    <main className="main">
      <div className="motivate">
        <h1>Let&#39;s do some math!</h1>
      </div>
      <div className="container">
        <div id="item-0" className="displayBox">{next || operation || total || 0}</div>
        <button id="item-1" type="button" onClick={handleClick} className="button">AC</button>
        <button id="item-2" type="button" onClick={handleClick} className="button">+/-</button>
        <button id="item-3" type="button" onClick={handleClick} className="button">%</button>
        <button id="item-4" type="button" onClick={handleClick} className="button">&divide;</button>
        <button id="item-5" type="button" onClick={handleClick} className="button">7</button>
        <button id="item-6" type="button" onClick={handleClick} className="button">8</button>
        <button id="item-7" type="button" onClick={handleClick} className="button">9</button>
        <button id="item-8" type="button" onClick={handleClick} className="button">x</button>
        <button id="item-9" type="button" onClick={handleClick} className="button">4</button>
        <button id="item-10" type="button" onClick={handleClick} className="button">5</button>
        <button id="item-11" type="button" onClick={handleClick} className="button">6</button>
        <button id="item-12" type="button" onClick={handleClick} className="button">-</button>
        <button id="item-13" type="button" onClick={handleClick} className="button">1</button>
        <button id="item-14" type="button" onClick={handleClick} className="button">2</button>
        <button id="item-15" type="button" onClick={handleClick} className="button">3</button>
        <button id="item-16" type="button" onClick={handleClick} className="button">+</button>
        <button id="item-17" type="button" onClick={handleClick} className="button">0</button>
        <button id="item-18" type="button" onClick={handleClick} className="button">.</button>
        <button id="item-19" type="button" onClick={handleClick} className="button">=</button>
      </div>
    </main>
  );
};

export default Calculator;
