import { createStore, combineReducers, applyMiddleware } from 'redux'
import { products, sort, modal } from './reducers'
import thunk from 'redux-thunk'

import storeInit from '../products.json'

// const store = createStore(
//   combineReducers({ products, sort, modal }),
//   (localStorage['redux-store']) ?
//     JSON.parse(localStorage['redux-store']) : 
//     storeInit
// )
const store = applyMiddleware(thunk)(createStore)(
  combineReducers({ products, sort, modal }),
  (localStorage['redux-store']) ? JSON.parse(localStorage['redux-store']) : storeInit
)

console.log(store.getState())

store.subscribe(()=>{
  localStorage['redux-store'] = JSON.stringify(store.getState())
})

export default store