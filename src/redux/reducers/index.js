import { combineReducers } from 'redux'
import { stylesReducer } from 'redux/reducers'
export { default as stylesReducer } from './stylesReducer'

export default combineReducers({
  styles: stylesReducer,
})
