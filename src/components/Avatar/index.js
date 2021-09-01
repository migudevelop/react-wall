import { memo } from 'react'
import PropTypes from 'prop-types'
import { WrapperStyled, AvatarStyled } from './styles'

const Avatar = ({ className, src, alt, size, hideShadow }) => (
  <WrapperStyled className={className}>
    <AvatarStyled src={src} alt={alt} size={size} hideShadow={hideShadow} />
  </WrapperStyled>
)

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
  hideShadow: PropTypes.bool,
}

Avatar.defaultProps = {
  alt: 'Avatars',
  size: 'sm',
  hideShadow: false,
}

export default memo(Avatar)
