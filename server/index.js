const mongoose = require('mongoose')
const express = require('express')
const cors = require('cors')
const trimBody = require('./middlewares/trimBody')
const session = require('./middlewares/session')
const cookieParser = require('cookie-parser');
const petController = require('./controllers/petController')
const authController = require('./controllers/authController')
const functions = require('firebase-functions')

require('dotenv').config()

const cookieSecret = process.env.COOKIE_SECRET;
const connectionString = process.env.CONNECTION_STRING

const app = express()

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
            // origin: 'https://pet-love-ft8x.vercel.app',
            origin: 'http://localhost:4200',
            credentials: true
        }
    ))

    app.use(cookieParser(cookieSecret))
    app.use(trimBody())
    app.use(session())
    app.use('/pets', petController)
    app.use('/auth', authController)

    app.listen(process.env.PORT)
}

// exports.api = functions.https.onRequest(start())

