import {
  TOOGLE_OPEN_NAVBAR,
  POSTS_FETCH_GET_POSTS_SUCCESS,
  TOGGLE_LOADING,
} from 'redux/types/appTypes'

export const INITIAL_STATE = {
  isLoading: false,
  navBar: {
    isOpen: false,
  },
  postsData: {
    hasMore: false,
    currentPage: 1,
    nextPage: 1,
    limit: 10,
    totalResults: 0,
    totalPages: 0,
    posts: [],
  },
}

const appReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action
  switch (type) {
    case TOOGLE_OPEN_NAVBAR:
      return {
        ...state,
        navBar: {
          isOpen: !state.navBar.isOpen,
        },
      }
    case POSTS_FETCH_GET_POSTS_SUCCESS:
      return {
        ...state,
        postsData: {
          ...payload,
          posts: [...state.postsData.posts, ...payload.posts],
        },
      }

    case TOGGLE_LOADING:
      return {
        ...state,
        isLoading: !state.isLoading,
      }

    default:
      return state
  }
}

export default appReducer
