import {TEMP_METRIC_CELSIUS} from '../redux/types/weatherTypes'

export const metricToView = (value: number, metric?: string, comparingTo = TEMP_METRIC_CELSIUS): number => {
    if (metric === comparingTo) {
        return +(value - 273.15).toFixed(2)
    } else {
        return +((value - 273.15) * 1.8 + 32).toFixed(2)
    }
}

export const textToArray = (toMap: any[], field: string): string => {
    return toMap.map(obj => obj[field]).join('. ')
}
