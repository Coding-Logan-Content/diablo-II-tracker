import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'
import hashPassword from '../utils/hashPassword.js'

// Create a Schema, which describes a user document
// The Node application houses the data structure, not Mongo
const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

// Create a method that User instances can call
// If we get a user from a db query, we can use this
userSchema.methods.matchPassword = async function (password) {
  return await bcrypt.compare(password, this.password)
}

// mongoose middleware hook that will hash the password
// (before saving a user document)
userSchema.pre('save', async function (next) {
  // Only run when password changes
  if (!this.isModified('password')) {
    next()
  }

  this.password = await hashPassword(this.password)
})

const User = mongoose.model('User', userSchema)

export default User
