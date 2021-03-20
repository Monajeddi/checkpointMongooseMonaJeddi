// require mongoose
const mongoose = require('mongoose')

//connection DB
const connectDB = async() => {

    try {

       await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`Database is connected`)
    } catch (error) {
console.error(`Connexion failed ! ${error}`)
    }

}

module.exports = connectDB