import { getRequest } from 'commons/httpRequestUtils'

export const getPostsService = ({ page = 1, limit = 10 }) =>
  getRequest({ endpoint: `/posts/?page=${page}&limit=${limit}` })
