import { TOOGLE_OPEN_NAVBAR } from 'redux/types/appTypes'

export const toogleOpenNavbar = () => (dispatch) =>
  dispatch({
    type: TOOGLE_OPEN_NAVBAR,
  })
