const mongoose = require('mongoose')

const mongooseProduct = new mongoose.Schema({
    firstName:{
        type:String,
        required: [true, 'name is required'],
    },
    lastName:{
        type:String,
        required: true,
    },
    phone:{
        type:Number,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    createDate:{
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('myOwnDB', mongooseProduct)
