import React, { Component } from 'react';

class EventBind extends Component {
    clickHandler(){
        this.setState ({
            message:"goodbye"
        })
        console.log(this);
    }
    
    constructor(props) {
        super(props)

        this.state = {
            message:"hello"
        }
    }

    render() {
        return(
            <div>
                <div>
                    <div>{this.state.message}</div>
                    <button onClick={this.clickHandler.bind(this)}>Click</button>
                </div>
            </div>
        ) 
        
    }
}
export default EventBind;