import React, {FC, useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {AppDispatch} from '../redux/rootReducer'
import {fetchWeather} from '../redux/actions'
import permissionErrorCover from '../assets/error.png'

const LoadingScreen: FC = () => {
    const dispatch = useDispatch<AppDispatch>()

    const [locationPermission, setLocationPermission] = useState(false)

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                ({coords}) => {
                    setTimeout(() => {
                        const [lat, lon] = [coords.latitude, coords.longitude]
                        dispatch(fetchWeather({lat, lon}))
                    }, 1000)
                },
                error => {
                    if (error.code === error.PERMISSION_DENIED) {
                        setLocationPermission(true)
                    }
                }
            )
        }
    }, [dispatch])

    if (locationPermission)
        return (
            <div className="card text-center shadowed-card">
                <img className="card-img-top" src={permissionErrorCover} alt="permission error" />
                <div className="card-body">
                    <h3 className="card-title">This app cannot work without geolocation</h3>
                    <h5 className="card-text">Please give permission and reload page.</h5>
                </div>
            </div>
        )

    return (
        <div className="text-center align-middle text-white mt-5">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <h4 className="mt-5">Loading...</h4>
        </div>
    )
}

export default LoadingScreen
