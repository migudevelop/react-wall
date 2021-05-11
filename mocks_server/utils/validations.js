const validator = require('validator')

const validateCreateUserParams = ({ name, surname, email, password }) => {
  try {
    let validate_name = !validator.isEmpty(name)
    let validate_surname = !validator.isEmpty(surname)
    let validate_email = !validator.isEmpty(email) && validator.isEmail(email)
    let validate_password = !validator.isEmpty(password)
    return (
      validate_name && validate_surname && validate_email && validate_password
    )
  } catch (error) {
    return false
  }
}

const validateUpdateUserParams = ({ name, surname, email }) => {
  try {
    let validate_name = !validator.isEmpty(name)
    let validate_surname = !validator.isEmpty(surname)
    let validate_email = !validator.isEmpty(email) && validator.isEmail(email)
    return validate_name && validate_surname && validate_email
  } catch (error) {
    return false
  }
}

const validateUserLoginParams = ({ email, password }) => {
  try {
    let validate_email = !validator.isEmpty(email) && validator.isEmail(email)
    let validate_password = !validator.isEmpty(password)
    return validate_email || validate_password
  } catch (error) {
    return false
  }
}

const validateCreateTopicParams = ({ title, content, lang }) => {
  try {
    let validate_title = !validator.isEmpty(title)
    let validate_content = !validator.isEmpty(content)
    let validate_lang = !validator.isEmpty(lang)
    return validate_title && validate_content && validate_lang
  } catch (error) {
    return false
  }
}

const validateCommentsParams = (content) => {
  try {
    let validate_content = !validator.isEmpty(content)
    return validate_content
  } catch (error) {
    return false
  }
}

const validatePageParams = (page) => {
  try {
    return !page || page == null || page == 0 || page == '0'
  } catch (error) {
    return false
  }
}

module.exports = {
  validateCreateUserParams,
  validateUserLoginParams,
  validateUpdateUserParams,
  validateCreateTopicParams,
  validatePageParams,
  validateCommentsParams,
}
