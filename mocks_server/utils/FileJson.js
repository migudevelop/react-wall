const path = require('path')
const fs = require('fs')

const CONFIG_DATA = {
  UTF8: 'utf8',
  DEFAULT_BASE_FOLDER: path.resolve(path.join('', 'data')),
  DEFAULT_FILES: {
    USERS: 'users.json',
    POSTS: 'posts.json',
  },
}

class FileJson {
  constructor(file, baseFolder) {
    this.baseFolder = baseFolder || CONFIG_DATA.DEFAULT_BASE_FOLDER
    this.existAndCreateFolder(this.baseFolder)
    this.file = file || CONFIG_DATA.DEFAULT_FILES.USERS
    this.fileRoute = path.resolve(`${this.baseFolder}\\${this.file}`)
  }

  updateFileRoute = () =>
    (this.fileRoute = path.resolve(`${this.baseFolder}\\${this.file}`))

  setFile = (file) => {
    this.file = file
    this.updateFileRoute()
  }

  setBaseFolder = (baseFolder) => {
    this.baseFolder = baseFolder
    this.updateFileRoute()
  }

  getFile = () => this.file

  getBaseFolder = () => this.baseFolder

  getFileRoute = () => this.fileRoute

  existFile = () => fs.existsSync(this.fileRoute)

  removeFile = () => {
    try {
      fs.unlinkSync(this.fileRoute)
    } catch (err) {
      console.error(err)
    }
  }

  createfile = () => {
    if (this.existFile()) this.removeFile()
    fs.writeFile(this.fileRoute, JSON.stringify({}), function (err) {
      if (err) throw err
      console.log('File is created successfully.')
    })
  }

  readFile = (routeFile) =>
    JSON.parse(fs.readFileSync(routeFile || this.fileRoute, CONFIG_DATA.UTF8))

  writeFile = (data) => fs.writeFileSync(this.fileRoute, JSON.stringify(data))

  existAndCreateFolder = (dir) => {
    const newDir = path.resolve(dir)
    if (!fs.existsSync(newDir)) {
      fs.mkdirSync(newDir)
    }
    this.setBaseFolder(newDir)
    this.updateFileRoute()
  }

  readDir = (dir) => fs.readdirSync(path.resolve(dir || this.baseFolder))
}

export default FileJson
