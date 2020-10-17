import {AlertActionTypes, SET_ALERT_MESSAGE} from './types/alertTypes'

const initialState = ''

export const alertReducer = (state = initialState, action: AlertActionTypes) => {
    switch (action.type) {
        case SET_ALERT_MESSAGE:
            return action.payload
        default:
            return state
    }
}
