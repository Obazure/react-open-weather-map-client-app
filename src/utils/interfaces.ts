export interface WeatherProfile {
    lat: number
    lon: number
    daily: DailyWeather[]
}

export interface DailyWeather {
    dt: number
    temp: WeatherTemperature
    weather: Weather[]
}

export interface WeatherTemperature {
    day: number
    min: number
    max: number
    night: number
}

export interface Weather {
    description: string
}

export interface ApiFetchWeatherInterface {
    lat: number
    lon: number
}
