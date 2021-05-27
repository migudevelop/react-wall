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
    // const params = req.body
    const posts = new Posts()
    const currentPosts = posts.getPost()
    return res.status(200).send({
      success: true,
      postsData: {
        currentPage: 1,
        limit: 10,
        totalResults: currentPosts.length,
        totalPages: Math.floor(currentPosts.length / 10),
        posts: currentPosts,
      },
    })
  },
}

module.exports = controller
