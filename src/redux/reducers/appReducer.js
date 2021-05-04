import { TOOGLE_OPEN_NAVBAR } from 'redux/types/appTypes'

export const INITIAL_STATE = {
  navBar: {
    isOpen: false,
  },
}

const appReducer = (state = INITIAL_STATE, action) => {
  const { type } = action
  switch (type) {
    case TOOGLE_OPEN_NAVBAR:
      return {
        ...state,
        navBar: {
          isOpen: !state.navBar.isOpen,
        },
      }

    default:
      return state
  }
}

export default appReducer
