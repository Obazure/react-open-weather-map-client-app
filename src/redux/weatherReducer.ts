import {SET_WEATHER, WeatherActionTypes} from './types/weatherTypes'
import {DailyWeather, WeatherProfile, WeatherTemperature} from '../utils/interfaces'

const initialState: WeatherProfile = {daily: [], lat: 0, lon: 0}

export const weatherReducer = (state = initialState, action: WeatherActionTypes) => {
    switch (action.type) {
        case SET_WEATHER:
            return action.payload
        default:
            return state
    }
}
