
const redux = require('redux')
const createStore = redux.createStore
const combineReducers = redux.combineReducers

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'
const reduxLogger = require('redux-logger');
const applyMiddleware = redux.applyMiddleWare 
const logger = reduxLogger.createLogger()

//action is an object with type property
function buyCake(){
    return {
        type:BUY_CAKE,
        info:'First redux action'
    }
}

function buyIceCream(){
    return {
        type:BUY_ICECREAM,
        info:'First redux action'
    }
}


//action creater, functions that reutrns action

//Reducer
//(prevState, action) => newState

// const initialState = {
//     numOfCakes:10,
//     numOfIceCreams:20
// }

const initialCakeState = {
    numOfCakes:10
}

const initialIceCreamState = {
    numOfIceCreams:20
}

//not mutating the state ob, retuning a new state object
// const reducer = (state = initialState, action) => {
//     switch(action.type){
//         case BUY_CAKE:return {
//             ...state,
//             numOfCakes:state.numOfCakes - 1
//         }
//         case BUY_ICECREAM:return {
//             ...state,
//             numOfIceCreams:state.numOfIceCreams - 1
//         }
//         default: return state
//     }
// }

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case BUY_CAKE:return {
            ...state,
            numOfCakes:state.numOfCakes - 1
        }
        default: return state
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type){
        case BUY_ICECREAM:return {
            ...state,
            numOfIceCreams:state.numOfIceCreams - 1
        }
        default: return state
    }
}
const rootReducer = combineReducers({
    cake:cakeReducer,
    iceCream:iceCreamReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))

console.log('initial State', store.getState())
const unsubscribe = store.subscribe(()=>{})

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())


store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()
//unscribe from the store
