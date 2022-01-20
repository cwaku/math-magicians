import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Navbar from './components/Navbar';
import Calculator from './components/Calculator';
import Home from './pages/Home';
import Quote from './pages/Quote';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/" element={<Home />} />
          <Route path="/quote" element={<Quote />} />
        </Routes>
      </>
    );
  }
}

export default App;
