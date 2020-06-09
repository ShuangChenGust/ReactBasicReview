import React, { Component } from 'react';
import RegComp from './regComp';

class ParentComp extends Component {
    constructor(props){
        super(props)

        this.state = {
            name : "jac"
        }
    }
    //lifecycle method
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:"Jack"
            })
        }, 2000)
    }

    render() {
        console.log('gggg parent comp render')
        return (
            <div>
                ParentComp
                <RegComp name="{this.state.name}"></RegComp>
                <pureComp name="{this.state.name}"></pureComp>
            </div>
        )
    }
}

export default ParentComp
