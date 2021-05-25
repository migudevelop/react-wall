'use strict'
const {
  validateCreateUserParams,
  validateUserLoginParams,
  validateUpdateUserParams,
} = require('../utils/validations')
const MESSAGES = require('../constants/messages/userMessage.json')

const controller = {
  getPosts: function (req, res) {
    // const params = req.body

    return res.status(200).send({ success: true })
  },
}

module.exports = controller
