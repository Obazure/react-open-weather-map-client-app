import React from 'react'
import {render} from 'react-dom'
import {applyMiddleware, compose, createStore} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {rootReducer} from './redux/rootReducer'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App'

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    )
)

const app = (
    <Provider store={store}>
        <App />
    </Provider>
)

render(app, document.getElementById('root'))
