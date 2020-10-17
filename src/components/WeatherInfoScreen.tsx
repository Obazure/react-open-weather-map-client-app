import React, {FC, useEffect, useState} from 'react'
import {TEMP_METRIC_CELSIUS, TEMP_METRIC_FAHRENHEIT} from '../redux/types/weatherTypes'
import {useSelector} from 'react-redux'
import {AppState} from '../redux/rootReducer'
import moment from 'moment'
import DailyWeatherCard from './DailyWeatherCard'
import {metricToView} from '../utils/view'
import {Bar} from 'react-chartjs-2'
import {Button, ButtonGroup, ProgressBar} from 'react-bootstrap'

const WeatherInfoScreen: FC = () => {
    const weather = useSelector((state: AppState) => state.weather)
    const [currentPage, setCurrentPage] = useState(0)
    const pageSize = 3
    const [metric, setMetric] = useState(TEMP_METRIC_CELSIUS)
    const [chartLabels, setChartLabels] = useState<string[]>([])
    const [chartData, setChartData] = useState<{data: number[]; label: string; backgroundColor: string}[]>([])

    useEffect(() => {
        const labels: string[] = []
        const dayTemp: number[] = []
        const minTemp: number[] = []
        const maxTemp: number[] = []

        weather.daily.forEach(day => {
            labels.push(moment(day.dt * 1000).format('YYYY-MM-DD'))
            dayTemp.push(metricToView(+day.temp.day, metric))
            minTemp.push(metricToView(+day.temp.min, metric))
            maxTemp.push(metricToView(+day.temp.max, metric))
        })
        setChartLabels(labels)
        setChartData([
            {data: dayTemp, label: `Day ${metric}`, backgroundColor: 'rgba(245, 155, 176, 1)'},
            {data: minTemp, label: `Min ${metric}`, backgroundColor: 'rgba(124, 193, 239, 1)'},
            {data: maxTemp, label: `Max ${metric}`, backgroundColor: 'rgba(245, 220, 149, 1)'},
        ])
    }, [weather, metric])

    const isNextPageExist = (): boolean => {
        return weather.daily.length > currentPage + pageSize
    }
    const isPreviousPageExist = (): boolean => {
        return 0 < currentPage
    }

    return (
        <div className="card text-center shadowed-card">
            <div className="card-body">
                <h1 className="card-title">Forecast for today</h1>
                <DailyWeatherCard weather={weather.daily[0]} metric={metric} />
                <div className="card-content">
                    <a
                        href={`https://www.google.com/maps/place/${+weather.lat},${+weather.lon}`}
                        rel="noopener noreferrer"
                        target="_blank"
                    >
                        Open my location
                    </a>
                </div>
                <hr />
                <div className="card-content">
                    <p>Forecast for {weather.daily.length} days</p>
                    <Bar
                        data={{
                            labels: chartLabels,
                            datasets: chartData,
                        }}
                        options={{
                            title: {
                                display: true,
                                text: `Temperature for next week (${metric})`,
                                fontSize: 20,
                            },
                            responsive: true,
                            aspectRatio: 1,
                            legend: {
                                display: true,
                                position: 'bottom',
                            },
                        }}
                    />
                </div>
                <ButtonGroup className="text-center">
                    <Button
                        name="metricRadioButtonSet"
                        value={TEMP_METRIC_CELSIUS}
                        onClick={() => setMetric(TEMP_METRIC_CELSIUS)}
                    >{`Celsius (${TEMP_METRIC_CELSIUS})`}</Button>
                    <Button
                        name="metricRadioButtonSet"
                        value={TEMP_METRIC_FAHRENHEIT}
                        onClick={() => setMetric(TEMP_METRIC_FAHRENHEIT)}
                    >{`Fahrenheit (${TEMP_METRIC_FAHRENHEIT})`}</Button>
                </ButtonGroup>
                <hr />
                <h6>Check another days ({metric})</h6>
                <div className="row">
                    {weather.daily.slice(currentPage, currentPage + pageSize).map(card => (
                        <div className="col-4 m-0 pl-1 pr-1" key={`weather-${card.dt}`}>
                            <DailyWeatherCard weather={card} metric={metric} />
                        </div>
                    ))}
                </div>
                <ProgressBar now={((currentPage + 2) / weather.daily.length) * 100} />
                <ButtonGroup className="mt-1">
                    <Button
                        className="btn-standard-width"
                        disabled={!isPreviousPageExist()}
                        onClick={() => {
                            setCurrentPage(currentPage - pageSize)
                        }}
                    >
                        &laquo; Previous
                    </Button>
                    <Button
                        className="btn-standard-width"
                        disabled={!isNextPageExist()}
                        onClick={() => {
                            setCurrentPage(currentPage + pageSize)
                        }}
                    >
                        Next &raquo;
                    </Button>
                </ButtonGroup>
            </div>
        </div>
    )
}

export default WeatherInfoScreen
