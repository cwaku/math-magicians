import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState((state) => calculate(state, event.target.textContent));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="container">
        <div id="item-0" className="displayBox">{next || operation || total || 0}</div>
        <button id="item-1" type="button" onClick={this.handleClick} className="button">AC</button>
        <button id="item-2" type="button" onClick={this.handleClick} className="button">+/-</button>
        <button id="item-3" type="button" onClick={this.handleClick} className="button">%</button>
        <button id="item-4" type="button" onClick={this.handleClick} className="button">/</button>
        <button id="item-5" type="button" onClick={this.handleClick} className="button">7</button>
        <button id="item-6" type="button" onClick={this.handleClick} className="button">8</button>
        <button id="item-7" type="button" onClick={this.handleClick} className="button">9</button>
        <button id="item-8" type="button" onClick={this.handleClick} className="button">x</button>
        <button id="item-9" type="button" onClick={this.handleClick} className="button">4</button>
        <button id="item-10" type="button" onClick={this.handleClick} className="button">5</button>
        <button id="item-11" type="button" onClick={this.handleClick} className="button">6</button>
        <button id="item-12" type="button" onClick={this.handleClick} className="button">-</button>
        <button id="item-13" type="button" onClick={this.handleClick} className="button">1</button>
        <button id="item-14" type="button" onClick={this.handleClick} className="button">2</button>
        <button id="item-15" type="button" onClick={this.handleClick} className="button">3</button>
        <button id="item-16" type="button" onClick={this.handleClick} className="button">+</button>
        <button id="item-17" type="button" onClick={this.handleClick} className="button">0</button>
        <button id="item-18" type="button" onClick={this.handleClick} className="button">.</button>
        <button id="item-19" type="button" onClick={this.handleClick} className="button">=</button>
      </div>
    );
  }
}

export default Calculator;
