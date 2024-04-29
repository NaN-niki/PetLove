const express = require('express')
// const cors = require('cors')
const cors = require('../middlewares/cors')
const trimBody = require('../middlewares/trimBody')
const session = require('../middlewares/session')
const cookieParser = require('cookie-parser');
const petController = require('../controllers/petController')
const authController = require('../controllers/authController')

const cookieSecret = 'SoftUni';

const app = express()

app.use(express.json())
// app.use(cors(
//     {
//         origin: 'http://localhost:4200',
//         credentials: true
//     }
// ))
app.use(cookieParser(cookieSecret))
app.use(cors())
app.use(trimBody())
app.use(session())
app.use('/pets', petController)
app.use('/auth', authController)

module.exports = app