import React from 'react';
import './App.css';
import GetApod from './Components/GetApod/GetApod'
import Intro from './Components/Intro/Intro'


function App() {
  return (
    <div className="App">
        <Intro />
        <GetApod />
    </div>
  );
}

export default App;
