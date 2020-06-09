import React, { Component } from 'react';
import './App.css';
import FunctionClick from './components/FunctionClick';
import ClassFunctionClick from './components/ClassFunctionClick';
// import Person from './Person/Person';
import EventBind from './components/EventBind';

class App extends Component{

  state = {
    languages:[
      {name:"php", votes:0},
      {name:"react", votes:0},
      {name:"Angular", votes:0},
      {name:"go", votes:0},
    ]
  }

  vote(i){
    let newLanguages = [...this.state.languages];
    console.log(newLanguages);
    newLanguages[i].votes++;
    this.setState({languages:newLanguages});
  }

  render(){
    return(
      <div className="App">
        <FunctionClick></FunctionClick>
        <ClassFunctionClick></ClassFunctionClick>
        <EventBind></EventBind>
      </div>
      // <React.Fragment>
      //   <h1>Vote Your Language!</h1>
      //   <div  className="languages">
      //     {
      //       this.state.languages.map((lang,i)=>
      //         <div key= {i} className="language">
      //           <div className="VoteCount">
      //             {lang.votes}
      //           </div>
      //           <div className="languageName">
      //             {lang.name}
      //           </div>
      //           <button onClick={this.vote.bind(this,i)}>click here</button>               
      //         </div>  
      //       )
      //     }
      //   </div>
      // </React.Fragment>
    )
  }
}


// class App extends Component{
  
//   state = {
//     persons:[
//       {name:'Max', age : '22'},
//       {name:"Shuang", age : '33'},
//     ],
//     othervalue:"some other state value"
//   }
  
//   switchNameHandler = ()=> {
//     console.log("was clicked");
//     // this.state.persons[0].name = "James";
//     this.setState({
//       persons:[
//         {name:'Max2', age : '222'},
//         {name:"Shuang2", age : '333'},
//       ]
//     })
//   }

//   render(){
//     // return JSX
//     return(
//       <div className="App">
//         <h1> Hi React</h1>
//         <button onClick={this.switchNameHandler}>Switch</button>
//         <Person name="will" age ="55"></Person>
//         <Person name={this.state.persons[0].name} age={this.state.persons[0].age} >My hobbies: tennis</Person>
//       </div>
//     );
//     // return React.createElement('div', {className:'App'}, React.createElement('h1', 'null', 'Created from Create Element'));
//   }
// }

export default App;
