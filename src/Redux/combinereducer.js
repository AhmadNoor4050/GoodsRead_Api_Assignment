import { combineReducers } from 'redux'
import booksfetch from './reducer'
import authReducer from '../authStores/authReducer'
const rootReducer= combineReducers({
   booksfetch,
   authReducer

})
export default rootReducer

