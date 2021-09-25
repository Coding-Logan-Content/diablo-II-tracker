import mongoose from 'mongoose'

export default async function connect() {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })

    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (err) {
    console.error(`database connect() encountered an Error: ${err.message}`)
    process.exit(1)
  }
}
