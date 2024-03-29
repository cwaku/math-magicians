import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import './components/Navbar.css';
import Navbar from './components/Navbar';
import Calculator from './components/Calculator';
import Home from './pages/Home';
import Quote from './pages/Quote';
import Footer from './components/Footer';

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
        <Footer />
      </>
    );
  }
}

export default App;
