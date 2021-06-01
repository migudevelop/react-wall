import { memo, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { InfiniteScrollStyled } from './styles'

const SCROLL_EVENT = 'scroll'

const InfiniteScroll = ({ children, className, fetchMoreItems }) => {
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    if (!isFetching) return
    fetchMoreItems()
  }, [isFetching])

  useEffect(() => {
    window.addEventListener(SCROLL_EVENT, handleScroll)
    return () => window.removeEventListener(SCROLL_EVENT, handleScroll)
  }, [])

  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return
    console.log('Fetch more list items!')
    setIsFetching(true)
  }

  return (
    <InfiniteScrollStyled className={className}>
      {children}
    </InfiniteScrollStyled>
  )
}

InfiniteScroll.propTypes = {
  children: PropTypes.node.isRequired,
  fetchMoreItems: PropTypes.func,
  className: PropTypes.string,
}

InfiniteScroll.defaultProps = {
  onClick: null,
}

export default memo(InfiniteScroll)
