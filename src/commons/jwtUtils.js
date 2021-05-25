const jwt = require('jsonwebtoken')

const TOKEN_KEY = 'WAL123456'

exports.tokenGeneration = (user) =>
  jwt.sign(user, TOKEN_KEY, { expiresIn: '3h' })

/** verifica al usuario a partir del token  */
exports.verify = (token) => {
  try {
    return jwt.verify(token, TOKEN_KEY)
  } catch (err) {
    return false
  }
}
