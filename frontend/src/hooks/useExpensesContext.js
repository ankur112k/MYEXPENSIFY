import { ExpenseContext } from '../context/ExpenseContext'
import { useContext } from 'react'

export const useExpensesContext = () => {
  const context = useContext(ExpenseContext)

  if (!context) {
    throw Error('useExpensesContext must be used inside an ExpensesContextProvider')
  }

  return context
}