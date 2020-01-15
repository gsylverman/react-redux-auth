import axios from "axios";
import { AUTH_USER } from "./types";
import { AUTH_ERROR } from "./types";

export const authAction = (formValues) => {
    return async dispatch => {
        try {
            const resp = await axios.post("https://reqres.in/api/register", formValues);
            dispatch({ type: AUTH_USER, payload: resp.data.token });
        } catch (error) {
            dispatch({ type: AUTH_ERROR, payload: "You are not authorized!" })
        }
    };
};