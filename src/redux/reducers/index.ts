import { combineReducers } from 'redux'
import userFormListReducer from './userFormListReducer'

const rootReducer = combineReducers({
  userFormList: userFormListReducer
})

export default rootReducer
