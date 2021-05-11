const jwt = require('jsonwebtoken')
const CONFIG = require('../configs/configToken.json')

exports.tokenGeneration = (user) =>
  jwt.sign(user, CONFIG.KEY, { expiresIn: '3h' })

/** verifica al usuario a partir del token  */
exports.verify = (token) => {
  try {
    return jwt.verify(token, CONFIG.KEY)
  } catch (err) {
    return false
  }
}
