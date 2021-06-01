function getElementsPerPage(array, page = 1, perPage = 10) {
  const start = (page - 1) * perPage;
  const end = page * perPage;

  const elementsObtained = array.slice(start, end);
  if (elementsObtained.length === 0) {
    return [];
  }

  if (page > 1) {
    obj.prev = page - 1;
  }

  if (end < array.length) {
    obj.next = page + 1;
  }

  if (obj.items.length !== array.length) {
    obj.current = page;
    obj.first = 1;
    obj.last = Math.ceil(array.length / perPage);
  }

  return obj;
}

module.exports = {
  }