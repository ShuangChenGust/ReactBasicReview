import { BUY_ICECREAM } from './iceCreamTypes'

const initialState = {
    numOfIceCreams:20
}



const iceCreamReducer = (state = initialState, actions) =>{
    switch(actions.type){
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams:state.numOfIceCreams - 1
        }
        default: return state
    }
}

export default iceCreamReducer