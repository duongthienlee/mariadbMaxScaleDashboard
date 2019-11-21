import axios from 'axios'

export const LOGIN = 'LOGIN'
export const LOGIN_OK = 'LOGIN_OK'
export const LOGIN_FAILED = 'LOGIN_FAILED'


export function auth(credentials) {
    return dispatch => {
        dispatch({ type: LOGIN, credentials: credentials })
        return axios.get('http://54.229.207.205:8989/v1/servers', { auth: credentials })
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