import PropTypes from 'prop-types'
import { Wrapper, Message } from './styles'
import LoaderSpinner from 'components/LoaderSpinner'

const Preload = ({ message }) => (
  <Wrapper>
    <LoaderSpinner secondary size="small" />
    {message && <Message>{message}</Message>}
  </Wrapper>
)

Preload.propTypes = {
  message: PropTypes.string,
}

export default Preload
