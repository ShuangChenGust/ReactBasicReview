import React from 'react';
import logo from './logo.svg';
import './App.css';
import LifeCycleA from './components/lifeCycleA';
import Unmouting from './components/Unmounting';

function App() {
  return (
    <div className="App">
      <Unmouting />
      <LifeCycleA favcol="yellow"></LifeCycleA>
    </div>
  );
}

export default App;
