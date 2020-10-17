import {WeatherProfile} from '../../utils/interfaces'

export const SET_WEATHER = 'WEATHER/SET_WEATHER'

export const TEMP_METRIC_CELSIUS = '°C'
export const TEMP_METRIC_FAHRENHEIT = '°F'

export interface SetWeatherAction {
    type: typeof SET_WEATHER
    payload: WeatherProfile
}

export type WeatherActionTypes = SetWeatherAction
