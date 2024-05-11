// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js';
import TextForm from './components/TextForm';
import About from './components/About.js';
import { useState } from 'react';



function App() { 
  const [mode] = useState('light'); //Whether dark mode is enables or not
  return ( 
    <>
      <Navbar title="TextUtils" aboutText="about us" mode={mode}/>
      <div className="container mb-3">
      <TextForm heading="Enter the text to analyze below"/>
      <About />

      </div>
    </>
  );
}

export default App;
