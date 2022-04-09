import { CHANGE_MODE, Mode } from "./constants";

const initialState = {
    mode: Mode.DEFAULT
}

const reducer = (state = initialState, action) => {
    console.log("Action: ", action);

    switch(action.type) {
        case CHANGE_MODE:
            return {
                ...state,
                mode: action.payload.mode
            }
        default:
            return state;
    }
}

export default reducer;