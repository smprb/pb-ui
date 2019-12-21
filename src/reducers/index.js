import { OPEN_PROJECT } from "../constants";

const initialState = {
    opened: true
};

const projectReducer = (state = initialState, action) => {
    if (action.type === OPEN_PROJECT) {
        return !state.opened;
    }
    return state;
}

export default projectReducer;
