const faker = require('faker')

const DEFAULT_MODEL = {
  id: faker.datatype.uuid(),
  owner: {},
  message: '',
  publishDate: new Date(),
}

module.exports = class Comment {
  constructor() {
    // this.users = [...usersData.results]
  }

  addTag = ({ ...DEFAULT_MODEL }) => {
    const location = []
    return location
  }

  getLocation = () => {
    const location = []
    return location
  }
}
