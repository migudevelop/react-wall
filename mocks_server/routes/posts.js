'use strict'
const express = require('express')
const PostsController = require('../controllers/posts')

const router = express.Router()
const mdAuth = require('../middlewares/authenticated')

router.get('/posts', mdAuth.authenticated, PostsController.getPosts)
// router.get('/topics/:page?', TopicController.getTopics);

module.exports = router
