import express from 'express'
import dotenv from 'dotenv'
import connect from './database.js'

import TestModel from './models/testModel.js'

// Read in the .env configurations
dotenv.config()
connect()

// Creating an instance of the server
const app = express()

// Creating the routes
// /api/test
app.get('/api/test', async (req, res) => {
  const results = await TestModel.find()
  res.json(results)
})

// Set the server to listen on a port
app.listen(5000, console.log('started listening'))
