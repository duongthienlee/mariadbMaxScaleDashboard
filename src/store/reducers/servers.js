import { FETCH_SERVERS_OK, FETCH_SERVERS_FAILED } from 'store/actions/servers'

const initialState = {
    data: null,
    errorMessage: ''
}

// Reducing function
export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SERVERS_OK: {
            return {
                ...state,
                data: action.data
            }
        }
        case FETCH_SERVERS_FAILED: {
            // toastr.error(action.data)
            return {
                ...state,
                errorMessage: action.error,
            }
        }
        default: {
            return state
        }
    }
}