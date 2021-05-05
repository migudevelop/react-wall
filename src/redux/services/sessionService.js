import { postRequest } from 'commons/httpRequestUtils'

export const loginService = ({ email, password }) =>
  postRequest({ endpoint: '/login', body: { email, password } })

export const registerService = ({ email, password }) =>
  postRequest({ endpoint: '/register', body: { email, password } })
