import React, { Component } from 'react'

class ClassFunctionClick extends Component {
    clickHandler(){
        console.log("Clicked")
    }
    
    render() {
        return (
            <div>
                <button onClick={this.clickHandler}>Click me</button>                
            </div>
        )
    }
}

export default ClassFunctionClick
