import React from 'react'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// reducers
import countReducer from './Reducers/countReducer'
import modalReducer from './Reducers/modalReducer'
import productReducer from './Reducers/productReducer'

// Components
import Counter from './Component/Counter'
import Modal from './Component/Modal'
import Products from './Component/Products'

const Middlewares = [thunk]

export default function App() {
    const Store = createStore( combineReducers({
        countState: countReducer,
        modalState: modalReducer,
        productState: productReducer
    }), composeWithDevTools(applyMiddleware(...Middlewares)) )
    return (
        <Provider store={Store}>
            <Counter />
            <Modal />
            <Products />
        </Provider>
    )
}
