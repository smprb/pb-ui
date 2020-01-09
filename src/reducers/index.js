import { combineReducers } from "redux";
import userReducer from "./UserReducer";
import projectReducer from "./ProjectReducer";

export default combineReducers({
    projectReducer,
    userReducer
})
