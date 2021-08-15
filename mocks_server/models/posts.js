const faker = require('faker')
const postsData = require('../data/posts.json')
const { getElementsPerPage } = require('../utils/utilsFunctions')

const DEFAULT_MODEL = {
  id: faker.datatype.uuid(),
  owner: {},
  publishDate: new Date(),
  text: '',
  image: faker.image.imageUrl(),
  comments: [],
  likes: [],
  tags: [],
}

module.exports = class Posts {
  constructor() {
    this.posts = [...postsData]
  }

  addPost(newPost) {
    return { ...DEFAULT_MODEL, ...newPost }
  }
  getPost(page = 1, limit = 10) {
    return getElementsPerPage(this.posts, page, limit)
  }
}
