import mongoose from 'mongoose'

const testSchema = mongoose.Schema({
  message: String,
})

const TestModel = mongoose.model('Test', testSchema, 'test')
export default TestModel
