const express = require('express')
const { getExpenses , createExpense , getExpense , deleteExpense , updateExpense } = require('../controllers/expenseController')

const router = express.Router()

// get all expenses
router.get('/' , getExpenses)

// post routes
router.post('/' , createExpense)

// get single expense
router.get('/:id' , getExpense)

//delete expense
router.delete('/:id' , deleteExpense)

// update expenses
router.patch('/:id' , updateExpense)



module.exports = router