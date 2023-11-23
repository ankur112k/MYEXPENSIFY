const mongoose = require('mongoose')

const schema = mongoose.Schema

const expenseSchema = new schema({
    item:{
        type : String,
        required : true
    },
    quantity:{
        type : Number,
        required : true
    },
    cost:{
        type : Number, 
        required : true
    }
}, {timestapms : true})

module.exports = mongoose.model('Expense', expenseSchema)