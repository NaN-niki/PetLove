const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const trimBody = require('./middlewares/trimBody')
const session = require('./middlewares/session')
const cookieParser = require('cookie-parser');
const petController = require('./controllers/petController')
const authController = require('./controllers/authController')
const cookieSecret = 'SoftUni';

const app = express()

const connectionString = 'mongodb://localhost:27017/pets'

start()
async function start() {

    try {
        await mongoose.connect(connectionString)
    } catch (error) {
        console.log(error)
    }
    app.use(express.json())
    app.use(cors(
        {
            origin: 'http://localhost:4200',
            credentials: true
        }
    ))
    app.use(cookieParser(cookieSecret))
    app.use(trimBody())
    app.use(session())
    app.use('/pets', petController)
    app.use('/auth', authController)

    app.listen(3000)
}