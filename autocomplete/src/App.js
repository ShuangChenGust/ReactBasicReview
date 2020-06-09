import React from 'react';
import logo from './logo.svg';
import './App.css';
import AutoCompletedText from './AutoCompletedText';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
import PureComp from './components/PureComponent';
import ParentCom from './components/ParentComp';
import ClickCouner from './components/ClickCouner';
import HoverCounter from './components/HoverCounter';
import WithCounter from './components/WithCounter';


function App() {
  return (
    <div className="App">
      {/* <AutoCompletedText></AutoCompletedText>
      <EventBind></EventBind> */}
      {/* <ParentComponent></ParentComponent>
      <FragmentDemo></FragmentDemo> */}
      {/* <table></table>
      <PureComp></PureComp> */}
      <ClickCouner></ClickCouner>
      <HoverCounter></HoverCounter>
    </div>
  );
}

export default App;
