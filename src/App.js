import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet.js';
import Welcome from './Components/Welcome.js';
import Hello from './Components/Hello.js';


function App() {
  return (
    <div className="App">
      {/* <Greet />
      <Welcome /> */}
      <Hello />
    </div>
  );
}

export default App;
