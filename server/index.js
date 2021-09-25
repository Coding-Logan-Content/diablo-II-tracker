import express from 'express'
import dotenv from 'dotenv'
import connect from './database.js'
import userRoutes from './features/userRoutes.js'

import TestModel from './models/testModel.js'

// Read in the .env configurations
dotenv.config()
const API_PORT = process.env.API_PORT || 5000
connect()

// Creating an instance of the server
const app = express()

// Populate req.body for json body requests
app.use(express.json())

// User routes, configured in another file to keep index.js clean
app.use('/api/users', userRoutes)

// Creating the routes
// /api/test
app.get('/api/test', async (req, res) => {
  const results = await TestModel.find()
  res.json(results)
})

// Set the server to listen on a port
app.listen(API_PORT, console.log(`API is listening on port ${API_PORT}`))
