import { getRequest } from 'commons/httpRequestUtils'

export const getPostsService = () => getRequest({ endpoint: '/posts' })
