import {metricToView, textToArray} from './view'
import {TEMP_METRIC_CELSIUS, TEMP_METRIC_FAHRENHEIT} from '../redux/types/weatherTypes'

describe('View value formatting functions', () => {
    test('metricToView should convert temperature correctly', () => {
        expect(metricToView(300, TEMP_METRIC_CELSIUS)).toBe(26.85)
        expect(metricToView(300, TEMP_METRIC_FAHRENHEIT)).toBe(80.33)
    })

    test('Redux Action keys are uniques', () => {
        const someArrayOfObjects = [{some: 'foo'}, {some: 'bar'}]
        expect(textToArray(someArrayOfObjects, 'some')).toBe('foo. bar')
    })
})
