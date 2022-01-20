import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Navbar />
        <Calculator />
      </>
    );
  }
}

export default App;
