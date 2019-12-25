import {OPEN_PROJECT, USER_SIGN_IN, USER_SIGN_OUT} from "../constants";

export const openProject = (opened) => ({type: OPEN_PROJECT, opened});

export const signIn = () => ({type: USER_SIGN_IN});
export const signOut = () => ({type: USER_SIGN_OUT});
