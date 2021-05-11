const jwt = require('../services/jwt')
const usersData = require('../data/users.json')

module.exports = class Users {
  constructor() {
    this.users = [...usersData.results]
  }

  login = ({ email = '', password = '' }) => {
    const userLogin = this.users.find(
      (data) => data.email === email && data.login.password === password
    )
    return userLogin
  }

  getUserLoginObject = (userLogin) => {
    delete userLogin.login
    return { ...userLogin, token: jwt.tokenGeneration(userLogin) }
  }
}
