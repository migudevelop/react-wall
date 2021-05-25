const jwt = require('../services/jwt')
const usersData = require('../data/posts.json')

module.exports = class Posts {
  constructor() {
    this.users = [...usersData.results]
  }

  getPost = ({ email = '', password = '' }) => {
    const userLogin = this.users.find(
      (data) => data.email === email && data.login.password === password
    )
    return userLogin
  }
}
