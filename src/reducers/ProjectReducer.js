import {OPEN_PROJECT} from "../constants";

const projectReducer = (state = true, action) => {
    if (action.type === OPEN_PROJECT) {
        return !action.opened
    }
    return state;
}

export default projectReducer;