const mongoose = require('mongoose')
const express = require('express')
// const cors = require('cors')
const cors = require('./middlewares/cors')
const trimBody = require('./middlewares/trimBody')
const session = require('./middlewares/session')
const cookieParser = require('cookie-parser');
const petController = require('./controllers/petController')
const authController = require('./controllers/authController')
const functions = require('firebase-functions')

const cookieSecret = 'SoftUni';

const app = express()
// const app = require('./util/app')

const connectionString = 'mongodb+srv://nikssi:993qSb7EKKA8XB5g@cluster0.x3iobnc.mongodb.net/pets?retryWrites=true&w=majority&appName=Cluster0'
// 993qSb7EKKA8XB5g

start()
async function start() {

    try {
        await mongoose.connect(connectionString)
    } catch (error) {
        console.log(error)
    }

    app.use(express.json())

    // app.use(cors(
    //     {
    //         // origin: 'https://pet-love-ft8x.vercel.app',
    //         origin: '*',  // ne se supportva v tozi sluchai modula
    //         credentials: true
    //     }
    // ))

    app.use(cookieParser(cookieSecret))
    // app.use(cors())
    app.use(trimBody())
    app.use(session())
    app.use('/pets', petController)
    app.use('/auth', authController)

    app.listen(3000) 
}

// exports.api = functions.https.onRequest(start())

