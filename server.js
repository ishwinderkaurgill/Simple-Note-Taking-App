require("dotenv").config()
const express = require('express')
const mongoose = require("mongoose")
const noteRoute = require('./route/notes-route')

const app = express()

app.use(express.json())

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("MongoDB Connected")
}).catch((err) => {
    console.log("mongoDb not connected", err)
})

app.use('/', noteRoute)

app.use((req, res) => {
    res.status(404).json({ err: "Route Not Found" })
})

const Port = process.env.PORT || 5000

app.listen(Port, () => {
    console.log(`🚀 Server on http://localhost:${PORT}`)
})