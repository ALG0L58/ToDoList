const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const config = require('config')
const PORT = process.env.port || config.get('serverPort')

const app = express()

app.use(express.json())

const start = async() => {
    try {
        await mongoose.connect(config.get('dbUrl'))
        app.listen(PORT, () => console.log(`Server start on port ${PORT}`))
    } catch(e) {
        console.log(e);
    }
}

start()