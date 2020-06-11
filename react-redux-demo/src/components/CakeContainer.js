import React from 'react'
//HOC from redux Lib
import { connect } from 'react-redux'
import {buyCake} from'../redux'

function CakeContainer(props) {
    return (
        <div>
            <h2>Number of Cakes - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>buy cakes</button>
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
        buyCake: () => dispatch(buyCake())
    }
}

export default connect(mapStateToPros, mapDispatchtoProps)(CakeContainer)

//step1: define a fn mapStatetoProps
//step2: define gn mapDispatchtoProps