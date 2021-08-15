import { memo, useEffect, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { InfiniteScrollStyled } from './styles'

const SCROLL_EVENT = 'scroll'

function isBottom(ref) {
  if (!ref.current) {
    return false
  }
  return ref.current.getBoundingClientRect().bottom <= window.innerHeight
}

const InfiniteScroll = ({
  children,
  className,
  isLoading,
  loadOnMount,
  hasMoreData,
  fetchMoreData,
}) => {
  const [initialLoad, setInitialLoad] = useState(true)
  const contentRef = useRef(null)

  useEffect(() => {
    if (loadOnMount && initialLoad) {
      fetchMoreData()
      setInitialLoad(false)
    }
  }, [fetchMoreData, loadOnMount, initialLoad])

  const onScroll = () => {
    if (!isLoading && hasMoreData && isBottom(contentRef)) {
      fetchMoreData()
    }
  }

  useEffect(() => {
    contentRef.current.addEventListener(SCROLL_EVENT, onScroll)
    return () => contentRef.current.removeEventListener(SCROLL_EVENT, onScroll)
  }, [fetchMoreData, isLoading, hasMoreData])

  return (
    <InfiniteScrollStyled className={className} ref={contentRef}>
      {children}
    </InfiniteScrollStyled>
  )
}

InfiniteScroll.propTypes = {
  children: PropTypes.node.isRequired,
  isLoading: PropTypes.bool,
  loadOnMount: PropTypes.bool,
  hasMoreData: PropTypes.bool.isRequired,
  fetchMoreData: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export default memo(InfiniteScroll)
