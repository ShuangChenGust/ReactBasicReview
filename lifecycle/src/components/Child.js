import React, { Component } from 'react'

class Child extends Component {
    componentWillUnmount(){
        alert("The component is about to be unmounted")
    }
    render() {
        return (
            <div>
                <h1>hello world</h1>
            </div>
        )
    }
}

export default Child
