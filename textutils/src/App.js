// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';

function App() {
  const [ mode, setMode] = useState('light');
  const[alert, setAlert] = useState(null);

  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = "rgb(24 35 45)";

    }
    else{
      setMode('light')
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About TextUtils"/>  */}
      <Navbar title="textUtils" mode={mode} toggleMode = {toggleMode}/>
      <Alert alert="This is alert" />
      <div className="container my-3">
      <Textform heading=" Enter the text to analyse below" mode={mode}/>
      </div>
      <About />

    </>
  );
}

export default App;
