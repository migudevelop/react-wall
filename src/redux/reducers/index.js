import { combineReducers } from 'redux'
import { stylesReducer, sessionReducer } from 'redux/reducers'
export { default as sessionReducer } from './sessionReducer'
export { default as stylesReducer } from './stylesReducer'

export default combineReducers({
  session: sessionReducer,
  styles: stylesReducer,
})
