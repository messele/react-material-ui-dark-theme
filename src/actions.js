import * as constants from './constants'

export const changeMode = (mode) => ({
    type: constants.CHANGE_MODE,
    payload: { mode }
})