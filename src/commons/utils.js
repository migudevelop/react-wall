import moment from 'moment'

export const getCompleteName = (name) => `${name?.first} ${name?.last}`
export const formatDate = (date = '', format = 'MM/DD/YYYY') =>
  moment(date).format(format)
