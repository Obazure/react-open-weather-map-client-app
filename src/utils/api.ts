import {ApiFetchWeatherInterface} from './interfaces'

const API_URL =
    window && 'location' in window && 'protocol' in window.location && 'host' in window.location
        ? window.location.protocol + '//' + window.location.host + '/api'
        : ''

const options = {method: 'GET'}

export const apiFetchWeather = ({lat, lon}: ApiFetchWeatherInterface) =>
    fetch(`${API_URL}?lat=${lat}&lon=${lon}`, {...options}).then(res => {
        if (res.status !== 200) throw res
        return res.json()
    })
