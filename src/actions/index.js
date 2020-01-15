import axios from "axios";
import { AUTH_USER } from "./types";
import { AUTH_ERROR } from "./types";

export const authAction = (formValues, redir) => {

    return async dispatch => {
        try {
            const resp = await axios.post("https://reqres.in/api/register", formValues);
            dispatch({ type: AUTH_USER, payload: resp.data.token });

            localStorage.setItem("token", resp.data.token);
            redir();

        } catch (error) {
            dispatch({ type: AUTH_ERROR, payload: "You are not authorized!" })
        }
    };
};