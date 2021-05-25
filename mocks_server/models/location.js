const DEFAULT_MODEL = {
  street: { number: 0, name: '' },
  city: '',
  state: '',
  country: '',
  postcode: 0,
}

module.exports = class Location {
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
