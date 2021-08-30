import { getPostsService } from 'redux/services/postsService'
import {
  TOOGLE_OPEN_NAVBAR,
  POSTS_FETCH_GET_POSTS_SUCCESS,
  TOGGLE_LOADING,
} from 'redux/types/appTypes'

export const toogleOpenNavbar = () => (dispatch) =>
  dispatch({
    type: TOOGLE_OPEN_NAVBAR,
  })

export const toogleLoading = () => (dispatch) =>
  dispatch({
    type: TOGGLE_LOADING,
  })

export const getPostsSuccess = (postsData) => ({
  type: POSTS_FETCH_GET_POSTS_SUCCESS,
  payload: postsData,
})

export const getPosts = (page) => (dispatch) =>
  new Promise((resolve, reject) => {
    getPostsService(page)
      .then((result) => {
        if (result.success) dispatch(getPostsSuccess(result.postsData))
        resolve(result)
      })
      .catch((error) => {
        reject(error)
      })
  })
