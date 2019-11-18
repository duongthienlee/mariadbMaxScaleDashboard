import { LOGIN, LOGIN_OK, LOGIN_FAILED } from 'store/actions/auth'

const initialState = {
    token: {
        token: "",
        expiry: ""
    },
    data: null,
    loginInProgress: false,
    isLoggedIn: false,
    error: false,
    errorMessage: ''
};

// Reducing function
export default (state = initialState, action) => {
    switch (action.type) {
        // Login
        case LOGIN: {
            return { ...state, loginInProgress: true, isLoggedIn: false }
        }
        case LOGIN_OK: {
            return {
                ...state, data: action.data,
                token: action.inMemoryToken,
                loginInProgress: true,
                isLoggedIn: true
            }
        }
        case LOGIN_FAILED: {
            // toastr.error(action.data)
            return {
                ...state,
                loginInProgress: false,
                error: true,
                errorMessage: action.data,
                isLoggedIn: false
            }
        }
        default: {
            return state;
        }
    }
}