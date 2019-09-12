import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import Flowers from './components/flowers/Flower'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Flowers/>
      <Footer/>
    </div>
  );
}

export default App;
