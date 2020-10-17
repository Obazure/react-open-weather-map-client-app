import {SET_WEATHER, TEMP_METRIC_CELSIUS, TEMP_METRIC_FAHRENHEIT} from './weatherTypes'
import {UPDATE_LOADER_STATUS} from './loaderTypes'
import {SET_ALERT_MESSAGE} from './alertTypes'
import set = Reflect.set

describe('Redux Types testing', () => {
    test('metric are not the same', () => {
        expect(TEMP_METRIC_CELSIUS).toBeTruthy()
        expect(TEMP_METRIC_FAHRENHEIT).toBeTruthy()
        expect(TEMP_METRIC_CELSIUS).not.toBe(TEMP_METRIC_FAHRENHEIT)
    })

    test('Redux Action keys are uniques', () => {
        const setKeys = new Set([SET_WEATHER, UPDATE_LOADER_STATUS, SET_ALERT_MESSAGE])
        expect(setKeys.size).toBe(3)
    })
})
