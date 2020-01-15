import { AUTH_USER } from "../actions/types";
import { AUTH_ERROR } from "../actions/types";

const INITIAL_STATE = {
    authenticated: "",
    errorMessage: ""
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case AUTH_USER:
            return { ...state, errorMessage: "", authenticated: action.payload };
        case AUTH_ERROR:
            console.log(action.payload);
            return { ...state, errorMessage: action.payload };
        default:
            return state;
    }
}