require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const app = express()
const expensesRoutes = require('./routes/expenses')
const userRoutes = require('./routes/User')

//middleware
app.use(express.json())
app.use((req , res , next) => {
    console.log(req.path , req.method);
    next()
})

//Routes
app.use('/api/expenses', expensesRoutes);
app.use('/api/expenses', userRoutes);
//db
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log('connected to DB & running on port', process.env.PORT);
        })
    })
    .catch((error) =>{
        console.log(error)
    })
