const express = require('express')
// const cors = require('cors')
const cors = require('./middlewares/cors')
const mongoose = require('mongoose')
const trimBody = require('./middlewares/trimBody')
const session = require('./middlewares/session')
const cookieParser = require('cookie-parser');
const petController = require('./controllers/petController')
const authController = require('./controllers/authController')

const cookieSecret = 'SoftUni';

const app = express()

// ----------------
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://nikssi:993qSb7EKKA8XB5g@cluster0.x3iobnc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// const client = new MongoClient(uri, {
//     serverApi: {
//         version: ServerApiVersion.v1,
//         strict: true,
//         deprecationErrors: true,
//     }
// });

// async function run() {
//     try {
//         // Connect the client to the server	(optional starting in v4.7)
//         await client.connect();
//         // Send a ping to confirm a successful connection
//         await client.db("admin").command({ ping: 1 });
//         console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }

//     app.use(express.json())
//     app.use(cors(
//         {
//             origin: '*',
//             credentials: true
//         }
//     ))
//     app.use(cookieParser(cookieSecret))
//     app.use(trimBody())
//     app.use(session())
//     app.use('/pets', petController)
//     app.use('/auth', authController)

//     app.listen(3000)
// }
// run().catch(console.dir);

//------------------------------------------

const connectionString = 'mongodb+srv://nikssi:993qSb7EKKA8XB5g@cluster0.x3iobnc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
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

    app.listen(3000)
}

// { 
//     "version" : 2,
//     "builds": [
//       { "src": "*.js", "use": "@vercel/node" }
//     ],
//     "routes": [
//         { "src": "/(.*)", "dest": "/" }
//       ]
//   }