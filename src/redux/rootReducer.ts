import {combineReducers} from 'redux'
import {configureStore} from '@reduxjs/toolkit'
import {loaderReducer} from './loaderReducer'
import {weatherReducer} from './weatherReducer'
import {alertReducer} from './alertReducer'

export const rootReducer = combineReducers({
    loader: loaderReducer,
    alert: alertReducer,
    weather: weatherReducer,
})

const store = configureStore({
    reducer: rootReducer,
})

export type AppState = ReturnType<typeof rootReducer>
export type AppDispatch = typeof store.dispatch
