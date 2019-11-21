import { combineReducers } from 'redux'
import auth from './auth'
import servers from './servers'

export default combineReducers({
    auth,
    servers
})