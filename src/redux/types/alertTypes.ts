export const SET_ALERT_MESSAGE = 'ALERT/SET_ALERT_MESSAGE'

export interface SetAlertMessageAction {
    type: typeof SET_ALERT_MESSAGE
    payload: string
}

export type AlertActionTypes = SetAlertMessageAction
