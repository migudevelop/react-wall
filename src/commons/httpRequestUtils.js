import { HTTP_REQUEST_METHODS } from './constants'

const DEFOULT_HEADERS = {
  'Content-Type': 'application/json',
  Authorization: window.sessionStorage.getItem('token'),
}

export const getRequest = ({ endpoint = '' }) =>
  commonHttpRequest({
    endpoint,
    config: {
      method: HTTP_REQUEST_METHODS.GET,
      headers: DEFOULT_HEADERS,
    },
  }).then((res) => res.json())

export const postRequest = ({ endpoint = '', body = {} }) =>
  commonHttpRequest({
    endpoint,
    config: {
      method: HTTP_REQUEST_METHODS.POST,
      headers: DEFOULT_HEADERS,
      body: JSON.stringify(body),
    },
  }).then((res) => res.json())

export const putRequest = ({ endpoint = '', body = {} }) =>
  commonHttpRequest({
    endpoint,
    config: {
      method: HTTP_REQUEST_METHODS.PUT,
      headers: DEFOULT_HEADERS,
      body: JSON.stringify(body),
    },
  }).then((res) => res.json())

export const deleteRequest = ({ endpoint = '' }) =>
  commonHttpRequest({
    endpoint,
    config: {
      method: HTTP_REQUEST_METHODS.DELETE,
      headers: DEFOULT_HEADERS,
    },
  }).then((res) => res.json())

const commonHttpRequest = ({ endpoint = '', config }) =>
  fetch(`${process.env.REACT_APP_API_BASEURL}${endpoint}`, config)
