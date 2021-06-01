function getElementsPerPage(array, page = 1, perPage = 10) {
  const obj = {
    hasMore: false,
    limit: perPage,
    prevPage: 1,
    nextPage: 1,
    lastPage: 1,
    currentPage: 1,
    elements: [],
  }
  const start = (page - 1) * perPage
  const end = page * perPage

  const elementsObtained = array.slice(start, end)
  if (elementsObtained.length === 0) {
    return obj
  }

  if (page > 1) {
    obj.prevPage = page - 1
  }

  if (end < array.length) {
    obj.nextPage = page + 1
  }

  obj.currentPage = page
  obj.lastPage = Math.ceil(array.length / perPage)

  return {
    ...obj,
    hasMore: page < obj.lastPage,
    elements: [...elementsObtained],
  }
}

module.exports = { getElementsPerPage }
