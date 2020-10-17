import React, {FC} from 'react'
import {useSelector} from 'react-redux'
import {AppState} from '../redux/rootReducer'
import LoadingScreen from './LoadingScreen'
import WeatherInfoScreen from './WeatherInfoScreen'
import ModalAlert from './ModalAlert'

const Screens: FC = () => {
    const loading = useSelector((state: AppState) => state.loader)
    const location = useSelector((state: AppState) => state.weather)
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-10 offset-1 col-md-6 offset-md-3">
                    <ModalAlert />
                    {loading || location.lat === 0 || location.lon === 0 ? <LoadingScreen /> : <WeatherInfoScreen />}
                </div>
            </div>
        </div>
    )
}

export default Screens
