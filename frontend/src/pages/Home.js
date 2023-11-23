import { useEffect } from "react"
import ExpenseInfo from "../components/ExpenseInfo"
import ExpenseForm from "../components/ExpenseForm"
import { useExpensesContext } from "../hooks/useExpensesContext"

const Home = () => {
  
  const {expenses , dispatch} = useExpensesContext()
  useEffect(() => {
      const fetchExpense =  async () => {
          const response = await fetch('/api/expenses')
          const jsonData = await response.json()
  
          if(response.ok){
            dispatch({type: 'SET_EXPENSES', payload: jsonData})
          }
      } 
      fetchExpense()
  })


  return (
    <>
      <div>
        <ExpenseForm />
      </div>
    <div className="flex ">
      
      <div >
        {
          expenses && expenses.map((expense) => {
            return <ExpenseInfo key = {expense._id} expense = {expense}/>
          })
        }
      </div>
    </div>
    </>
  )
}

export default Home