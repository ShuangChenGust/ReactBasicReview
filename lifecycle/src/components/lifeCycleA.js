import React, { Component } from "react";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      favoriteColor : "red",
    };
    console.log("LifeCycleA Constructor");
  }

//   static getDerivedStateFromProps(props, state) {
//     console.log("LifeCycleA getDerivedStateFromProps");
//     return {favoriteColor:props.favcol};
//   }

  componentDidMount() {
     setTimeout(()=>{
         this.setState({favoriteColor:'yellow'})
     }, 3000)
      console.log("LifeCycleA componentDidMount")
  }

  render() {
    console.log("LifeCycleA render");
    return <div>My Favorite Color is {this.state.favoriteColor}</div>;
  }
}

export default LifeCycleA;
