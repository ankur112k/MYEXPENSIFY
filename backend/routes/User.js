const { loginUser, signupUser} = require('../controllers/UserController')


const express = require('express')
const router = express.Router()
//login

router.post('/login', loginUser)

//signup

router.post('/signup', signupUser)


module.exports = router