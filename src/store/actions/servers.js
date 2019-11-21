import axios from 'axios'
import config from 'config';

export const FETCH_SERVERS_OK = 'FETCH_SERVERS_OK'
export const FETCH_SERVERS_FAILED = 'FETCH_SERVERS_FAILED'


export function fetchServerData(credentials) {
    return dispatch => {
        return axios.get(`${config.api.root}/v1/servers`, { auth: credentials })
            .then((response) => {
                const { data } = response.data
                dispatch({ type: FETCH_SERVERS_OK, data })
            })
            .catch((error) => {
                dispatch({ type: FETCH_SERVERS_FAILED, error })
            })
    }
}