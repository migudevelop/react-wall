import { combineReducers } from 'redux'
import { stylesReducer, sessionReducer, appReducer } from 'redux/reducers'
export { default as appReducer } from './appReducer'
export { default as sessionReducer } from './sessionReducer'
export { default as stylesReducer } from './stylesReducer'

export default combineReducers({
  app: appReducer,
  session: sessionReducer,
  styles: stylesReducer,
})
