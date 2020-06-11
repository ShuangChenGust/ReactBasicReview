import React from 'react'
//HOC from redux Lib
import { connect } from 'react-redux'
import {buyCake} from'../redux'
import { useState } from 'react'


function CakeContainer(props) {
    const [number, setNumber] = useState(1)
    return (
        <div>
            <h2>Number of Cakes - {props.numOfCakes}</h2>
            <input type='text' value={number} onChange={e=>setNumber(e.target.value)}/>    
    <button onClick={ ()=>props.buyCake(number)}>buy cakes{number}</button>
        </div>
    )
}

const mapStateToPros = state => {
    return {
        numOfCakes:state.cake.numOfCakes
    }    
}

const mapDispatchtoProps = dispatch => {
    return{
        //arrfn to dispatch the action
        buyCake: (number) => dispatch(buyCake(number))
    }
}

export default connect(mapStateToPros, mapDispatchtoProps)(CakeContainer)

//step1: define a fn mapStatetoProps
//step2: define gn mapDispatchtoProps