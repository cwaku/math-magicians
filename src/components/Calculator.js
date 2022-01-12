import React from 'react';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div id="item-0" className="displayBox">0</div>
        <button id="item-1" type="button" className="button">AC</button>
        <button id="item-2" type="button" className="button">+/-</button>
        <button id="item-3" type="button" className="button">%</button>
        <button id="item-4" type="button" className="button">/</button>
        <button id="item-5" type="button" className="button">7</button>
        <button id="item-6" type="button" className="button">8</button>
        <button id="item-7" type="button" className="button">9</button>
        <button id="item-8" type="button" className="button">x</button>
        <button id="item-9" type="button" className="button">4</button>
        <button id="item-10" type="button" className="button">5</button>
        <button id="item-11" type="button" className="button">6</button>
        <button id="item-12" type="button" className="button">-</button>
        <button id="item-13" type="button" className="button">1</button>
        <button id="item-14" type="button" className="button">2</button>
        <button id="item-15" type="button" className="button">3</button>
        <button id="item-16" type="button" className="button">+</button>
        <button id="item-17" type="button" className="button">0</button>
        <button id="item-18" type="button" className="button">.</button>
        <button id="item-19" type="button" className="button">=</button>
      </div>
    );
  }
}

export default Calculator;
