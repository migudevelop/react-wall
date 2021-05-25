import { memo } from 'react'
import PropTypes from 'prop-types'
import { Spinner } from './styles'

const SMALL_BUTTON = 'small',
  MEDIUM_BUTTON = 'medium',
  LARGE_BUTTON = 'large'

const LoaderSpinner = ({ secondary = false, size }) => (
  <Spinner $secondary={secondary} fontSize={size} />
)

LoaderSpinner.propTypes = {
  secondary: PropTypes.bool,
  size: PropTypes.oneOf([SMALL_BUTTON, MEDIUM_BUTTON, LARGE_BUTTON]),
}

LoaderSpinner.defaultProps = {
  secondary: false,
  size: LARGE_BUTTON,
}

export default memo(LoaderSpinner)
