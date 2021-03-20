const mongoose = require('mongoose')

//contact schema
const {Schema} = mongoose

const contactSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    phone : Number
})

module.exports = Contact = mongoose.model('contact', contactSchema)