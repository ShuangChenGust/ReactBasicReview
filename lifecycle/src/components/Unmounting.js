import React, { Component } from 'react'
import ReactDom from 'react-dom';
import Child from './Child';

class Unmounting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             show:true
        }
    }
    del = () =>{
        this.setState({show:false});
    }

    render() {
        let myHeader;
        if(this.state.show){
            myHeader = <Child />
        }
        return (
            <div>
                {myHeader}
                <button type = "button" onClick={this.del}>Delete Component</button>
            </div>
        )
    }
}

export default Unmounting
