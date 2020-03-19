import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet.js';
import Welcome from './Components/Welcome.js';
import Hello from './Components/Hello.js';
import Messages from './Components/Messages.js';
import Counter from './Components/Counter.js';

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter> */}
       <Greet name = "Bruce" heroname = "spider">
         <p>This is children prop</p> </Greet>
       <Greet name = "clart" heroname = "bat">
         <button>Action</button>
         </Greet>
       <Greet name = "hah" heroname = "super"/>
      <Welcome name = "hah" heroname = "bat"/> 
      <Welcome name = "clark" heroname = "sup"/> 
      <Welcome name = "brute" heroname = "superman"/> 
      {/* <Hello />  
      <Messages></Messages> */}
    </div>
  );
}

export default App;
