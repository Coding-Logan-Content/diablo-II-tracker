import User from '../models/userModel.js'

// This route will handle creation of a new User document
export const registerUser = async (req, res, next) => {
  try {
    // middleware populates req.body for us to use here
    const { username, password } = req.body

    // Make sure user doesn't already exist
    const foundUser = await User.findOne({ username })

    if (foundUser) {
      res.status(400)
      throw new Error('That username is unavailable')
    }

    // Accept user information
    const newUser = {
      username,
      // We don't have to hash this password, because we told Mongo
      // to hash the password pre "save": see userModel.js
      password,
    }

    // Save the information into the database via Mongoose
    const savedUser = await User.create(newUser)

    if (savedUser) {
      res.json(savedUser)
    } else {
      res.status(400)
      throw new Error('User could not be saved')
    }
  } catch (error) {
    next(error)
  }
}
