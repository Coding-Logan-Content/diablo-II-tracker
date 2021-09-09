import mongoose from 'mongoose'

export default async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}
