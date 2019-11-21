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
                const { data } = response.data
                //Fake jwt_token
                let token = {
                    token: "jwt_token",
                    expiry: "jwt_token_expiry"
                }
                dispatch({ type: LOGIN_OK, data, token, credentials })
            })
            .catch((error) => {
                dispatch({ type: LOGIN_FAILED, error })
            })
    }
}