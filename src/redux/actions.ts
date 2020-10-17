import {SET_WEATHER, SetWeatherAction} from './types/weatherTypes'
import {ApiFetchWeatherInterface, WeatherProfile} from '../utils/interfaces'
import {apiFetchWeather} from '../utils/api'
import {APP_LOADER_HIDE, APP_LOADER_SHOW, UPDATE_LOADER_STATUS, UpdateLoaderStatusAction} from './types/loaderTypes'
import {AppDispatch} from './rootReducer'
import {SET_ALERT_MESSAGE, SetAlertMessageAction} from './types/alertTypes'

export const setWeather = (weather: WeatherProfile): SetWeatherAction => {
    return {
        type: SET_WEATHER,
        payload: weather,
    }
}

export const updateLoaderStatus = (status: boolean): UpdateLoaderStatusAction => {
    return {
        type: UPDATE_LOADER_STATUS,
        payload: status,
    }
}

export const setAlertMessage = (message: string): SetAlertMessageAction => {
    return {
        type: SET_ALERT_MESSAGE,
        payload: message,
    }
}

export const closeAlert = () => {
    return (dispatch: AppDispatch) => {
        dispatch(setAlertMessage(''))
    }
}

export const throwAlert = (message: string) => {
    return (dispatch: AppDispatch) => {
        dispatch(setAlertMessage(message))
        setTimeout(() => {
            dispatch(setAlertMessage(''))
        }, 8000)
    }
}

export const fetchWeather = (coordinates: ApiFetchWeatherInterface) => {
    return async (dispatch: AppDispatch) => {
        dispatch(updateLoaderStatus(APP_LOADER_SHOW))
        try {
            const response = await apiFetchWeather(coordinates)
            dispatch(setWeather(response))
        } catch (error) {
            const errorMessage = await error.toString()
            dispatch(throwAlert(errorMessage))
        }
        dispatch(updateLoaderStatus(APP_LOADER_HIDE))
    }
}
