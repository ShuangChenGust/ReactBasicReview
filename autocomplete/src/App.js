import React from 'react';
import './App.css';
import AutoCompletedText from './AutoCompletedText';
import EventBind from './components/EventBind'
import ParentComponent from './components/ParentComponent';
import FragmentDemo from './components/FragmentDemo';
import Table from './components/Table';
// import PureComp from './components/PureComp';
import ParentComp from './components/ParentComp';
import ClickCouner from './components/ClickCouner';
import HoverCounter from './components/HoverCounter';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import HookCounterTwo from './components/HookCounterTwo';

function App() {
  return (
    <div className="App">
      {/* <AutoCompletedText></AutoCompletedText> */}
      {/* <EventBind></EventBind> */}
      {/* <ParentComponent></ParentComponent> */}
      {/* <FragmentDemo></FragmentDemo> */}
      {/* <Table></Table> */}
      {/* <ParentComp></ParentComp> */}
      {/* <ClickCouner name = "Victor"></ClickCouner>
      <HoverCounter></HoverCounter> */}
      {/* <ClassCounter></ClassCounter>
      <HookCounter></HookCounter> */}
      <HookCounterTwo></HookCounterTwo>
    </div>
  );
}

export default App;
