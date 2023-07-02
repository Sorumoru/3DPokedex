const { mongoose } = require('mongoose')

const localMongoConnection = process.env.DB_STRING
const mongoAtlasConnection = process.env.DB_ATLAS_STRING

const connectDB = async () => {
  try {
    await mongoose.connect(localMongoConnection)
    console.log('Connected to db')
    mongoose.connection.db.dropDatabase()
    console.log('Dropped db')
  } catch (error) {
    console.log(`db error: ${error}`)
  }
}

module.exports = { connectDB }
