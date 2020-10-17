import {LoaderActionTypes, UPDATE_LOADER_STATUS} from './types/loaderTypes'

const initialState = true

export const loaderReducer = (state = initialState, action: LoaderActionTypes) => {
    switch (action.type) {
        case UPDATE_LOADER_STATUS:
            return action.payload
        default:
            return state
    }
}
