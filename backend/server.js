require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const tableRoutes = require('./routes/tableRoutes')

const app = express()

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/tables', tableRoutes)

// connect to DB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("connected to DB and listening on port", process.env.PORT)
        })
    })
    .catch(err => {
        console.log(err)
    })
