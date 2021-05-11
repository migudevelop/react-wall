'use strict'
const {
  validateCreateUserParams,
  validateUserLoginParams,
  validateUpdateUserParams,
} = require('../utils/validations')
const MESSAGES = require('../constants/messages/userMessage.json')
const Users = require('../models/user')

const controller = {
  save: function (req, res) {
    const params = req.body
    if (!validateCreateUserParams(params))
      return res
        .status(200)
        .send({ message: MESSAGES.INCORRET_DATA_VALIDATION })
  },
  login: function (req, res) {
    const params = req.body
    if (!validateUserLoginParams(params))
      return res.status(200).send({ message: MESSAGES.INCORRECT_DATA })

    const users = new Users()
    const userLogin = users.login(params)
    if (userLogin == null || Object.keys(userLogin).length <= 0)
      return res.status(200).send({
        message: `${
          MESSAGES.INCORRECT_DATA
        } or ${MESSAGES.USER_NOT_EXIST.toLowerCase()}`,
      })

    return res
      .status(200)
      .send({ success: true, user: users.getUserLoginObject(userLogin) })
  },
}

module.exports = controller
