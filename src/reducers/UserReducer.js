import {USER_SIGN_IN, USER_SIGN_OUT} from "../constants";

const userReducer = (state = false, action) => {
    switch (action.type) {
        case USER_SIGN_OUT:
            return false;
        case USER_SIGN_IN:
            return true;
        default:
            return state;
    }
};

export default userReducer;