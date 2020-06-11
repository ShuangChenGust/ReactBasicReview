import React from 'react'
//HOC from redux Lib
import { connect } from 'react-redux'
import {buyIceCream} from'../redux'

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of IceCreams - {props.numOfIceCreams}</h2>
            <button onClick={props.buyIceCream}>buy IceCreams</button>
        </div>
    )
}

const mapStateToPros = state => {
    return {
        numOfIceCreams:state.iceCream.numOfIceCreams
        // numOfIceCreams:state.iceCream.numOfIceCreams
    }    
}

const mapDispatchtoProps = dispatch => {
    return{
        //arrfn to dispatch the action
        buyIceCream: () => dispatch(buyIceCream())
    }
}

export default connect(mapStateToPros, mapDispatchtoProps)(IceCreamContainer)

//step1: define a fn mapStatetoProps
//step2: define gn mapDispatchtoProps