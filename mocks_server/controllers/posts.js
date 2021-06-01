'use strict'
const {
  validateCreateUserParams,
  validateUserLoginParams,
  validateUpdateUserParams,
} = require('../utils/validations')
const MESSAGES = require('../constants/messages/userMessage.json')
const Posts = require('../models/posts')

const controller = {
  getPosts: function (req, res) {
    const { page, limit } = req.params
    const posts = new Posts()
    const currentPosts = posts.getPost(page, limit)
    return res.status(200).send({
      success: true,
      postsData: {
        currentPage: currentPosts.currentPage,
        limit: currentPosts.perPage,
        totalResults: currentPosts.elements.length,
        totalPages: currentPosts.lastPage,
        hasMore: currentPosts.hasMore,
        nextPage: currentPosts.nextPage,
        posts: currentPosts.elements,
      },
    })
  },
}

module.exports = controller
