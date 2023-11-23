const Expense = require('../models/expenseModel')
const mongoose = require('mongoose')


// get all  expenses
const getExpenses = async (req , res) => {
    const expense = await Expense.find({}).sort({createdAt: -1})
    res.status(200).json(expense)
}

// get single expense
const getExpense = async (req , res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error:"No Expense Found"})
    }
    const expense = await Expense.findById(id)
    if(!expense){
        res.status(404).json({error:"No Expense Found"})
    }
    res.status(200).json(expense)
}

// create expenses
const createExpense = async (req , res) => {
    const { item , quantity , cost } = req.body
    try{
        const expense = await Expense.create({ item , quantity , cost })
        res.status(200).json(expense)
    }catch(error){
        res.status(400).json({error : error.message})
    }
}

// delete workout

const deleteExpense = async (req , res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error:"No Expense Found"})
    }
    const expense = await Expense.findOneAndDelete({_id : id})
    if(!expense){
        res.status(404).json({error:"No Expense Found"})
    }
    res.status(200).json(expense)
}

// update workout
const updateExpense = async (req , res) => {
    const { id } = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        res.status(404).json({error:"No Expense Found"})
    }
    const expense = await Expense.findOneAndUpdate({_id : id},{
        ...req.body
    })
    res.status(200).json(expense)
}

module.exports = {
    getExpenses,
    getExpense,
    createExpense,
    deleteExpense,
    updateExpense
}