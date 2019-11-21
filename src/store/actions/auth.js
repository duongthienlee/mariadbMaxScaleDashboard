import axios from 'axios'
import config from 'config';

export const LOGIN = 'LOGIN'
export const LOGIN_OK = 'LOGIN_OK'
export const LOGIN_FAILED = 'LOGIN_FAILED'


export function auth(credentials) {
    return dispatch => {
        dispatch({ type: LOGIN, credentials: credentials })
        return axios.get(`${config.api.root}/v1/servers`, { auth: credentials })
            .then((response) => {
                const { data } = response
                //Fake jwt_token
                let inMemoryToken = {
                    token: "jwt_token",
                    expiry: "jwt_token_expiry"
                }
                dispatch({ type: LOGIN_OK, data, inMemoryToken })
            })
            .catch((response) => {
                const { data } = response
                dispatch({ type: LOGIN_FAILED, data })
            })
    }
}