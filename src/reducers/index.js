import { combineReducers } from 'redux'
import UserReducer from './user_reducer'
import StatusReducer from './status_reducer'
import ProfileReducer from'./profile_reducer'
import ErrorReducer from './error_reducer'
const AllReducers = combineReducers({
    user:UserReducer,
    status:StatusReducer,
    error:ErrorReducer,
    profile:ProfileReducer,
});
export default AllReducers;