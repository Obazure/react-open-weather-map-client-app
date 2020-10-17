export const UPDATE_LOADER_STATUS = 'APP/UPDATE_API_LOADER_STATUS'

export const APP_LOADER_HIDE = false
export const APP_LOADER_SHOW = true

export interface UpdateLoaderStatusAction {
    type: typeof UPDATE_LOADER_STATUS
    payload: typeof APP_LOADER_HIDE | typeof APP_LOADER_SHOW
}

export type LoaderActionTypes = UpdateLoaderStatusAction
