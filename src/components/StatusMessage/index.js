import { useState, useEffect, memo } from 'react'
import PropTypes from 'prop-types'
import { Success, Warning, Error, Info } from './styles'
import { STATUS_MESSAGE_CLEAR_TIME } from 'commons/constants'

const StatusMessage = ({ type, message, onClear }) => {
  const [show, setShow] = useState(true)

  useEffect(() => {
    setShow(true)
    const timer = setTimeout(() => {
      setShow(false)
      onClear && onClear()
    }, STATUS_MESSAGE_CLEAR_TIME)
    return () => clearTimeout(timer)
  }, [setShow])

  if (!show) return null
  return (
    <>
      {type === 'success' && <Success>{message}</Success>}
      {type === 'warning' && <Warning>{message}</Warning>}
      {type === 'error' && <Error>{message}</Error>}
      {type === 'info' && <Info>{message}</Info>}
    </>
  )
}
StatusMessage.propTypes = {
  type: PropTypes.oneOf(['success', 'warning', 'error', 'info']),
  message: PropTypes.string,
  onClear: PropTypes.func,
}

StatusMessage.defaultProps = {
  type: 'info',
  message: '',
  onClear: null,
}
export default memo(StatusMessage)
