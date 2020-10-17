import React, {FC} from 'react'
import moment from 'moment'
import {metricToView, textToArray} from '../utils/view'
import {DailyWeather} from '../utils/interfaces'

interface Props {
    weather: DailyWeather
    metric: string
}

const DailyWeatherCard: FC<Props> = ({weather, metric}) => (
    <div className="card h-100">
        <h4 className="card-title mt-3">{moment(weather.dt * 1000).format('DD-MM-YYYY')}</h4>
        <div className="card-content">
            <h6>{`Day: ${metricToView(weather.temp.day, metric)} ${metric}`}</h6>
            <h6>{`Night: ${metricToView(weather.temp.night, metric)} ${metric}`}</h6>
            <blockquote className="blockquote">{`${textToArray(weather.weather, 'description')}`}</blockquote>
        </div>
    </div>
)

export default DailyWeatherCard
