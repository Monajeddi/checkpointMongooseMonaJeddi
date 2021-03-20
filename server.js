// require express
const express = require("express")

// instance of express

const app = express()

//require dotenv

require('dotenv').config()

//middleware
app.use(express.json())

// connect to DB
const connectDB = require('./config/connectDB')
connectDB()

//routes
app.use('/contacts',require('./routes/contact'))


//PORT
const PORT = process.env.PORT 

// creation de serveur
app.listen(PORT, error =>
    error ? console.error(error)
    :
    console.log(`Server is running on port ${PORT}`)
    )
