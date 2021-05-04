import LoaderSpinner from 'components/LoaderSpinner'
import { memo } from 'react'
import { FullPageLoaderStyled } from './styles'

const FullPageLoader = () => (
  <FullPageLoaderStyled>
    <LoaderSpinner />
  </FullPageLoaderStyled>
)

export default memo(FullPageLoader)
