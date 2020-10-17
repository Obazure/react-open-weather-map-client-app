import {SET_WEATHER, WeatherActionTypes} from './types/weatherTypes'
import {DailyWeather, WeatherProfile, WeatherTemperature} from '../utils/interfaces'

const initialTemp: WeatherTemperature = {day: 0, max: 0, min: 0, night: 0}
const initialDaily: DailyWeather = {dt: 0, temp: initialTemp, weather: []}
const initialState: WeatherProfile = {daily: [initialDaily], lat: 0, lon: 0}

export const weatherReducer = (state = initialState, action: WeatherActionTypes) => {
    switch (action.type) {
        case SET_WEATHER:
            return action.payload
        default:
            return state
    }
}
