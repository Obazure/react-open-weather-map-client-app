import {SET_ALERT_MESSAGE, SetAlertMessageAction} from './types/alertTypes'
import {alertReducer} from './alertReducer'
import {UPDATE_LOADER_STATUS} from './types/loaderTypes'
import {loaderReducer} from './loaderReducer'

describe('alertReducer actions', () => {
    test('default value with empty state', () => {
        expect(alertReducer(undefined, {payload: 'payload', type: SET_ALERT_MESSAGE})).toBe('payload')
    })
    test('default value with not empty state', () => {
        expect(alertReducer('previous state', {payload: 'payload', type: SET_ALERT_MESSAGE})).toBe('payload')
    })
})

describe('loaderReducer actions', () => {
    test('default value with empty state', () => {
        expect(loaderReducer(undefined, {payload: false, type: UPDATE_LOADER_STATUS})).toBe(false)
    })
    test('default value with not empty state', () => {
        expect(loaderReducer(true, {payload: false, type: UPDATE_LOADER_STATUS})).toBe(false)
    })
})
