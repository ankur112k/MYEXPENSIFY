import React from 'react'
import { useExpensesContext } from "../hooks/useExpensesContext"



const ExpenseInfo = ({expense}) => {

  const { dispatch } = useExpensesContext()


  const handleClick = async () => {
    const response = await fetch('api/expenses/' + expense._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if(response.ok) {
      dispatch({type: 'DELETE_EXPENSES', payload: json})
    }
  }
    return (
      
          <div className="rounded w-80 flex items-center justify-center shadow-md shadow-indigo-600">
            <div className="p-7">
              <div>
                <h2 className="text-xl text-black font-bold ">Item: <span className=' text-indigo-600'>{expense.item}</span></h2>
                <p className="text-gray-600"><strong>Quantity (kg): </strong>{expense.quantity}</p>
                <p className="text-gray-600"><strong>Cost: </strong>{expense.cost}</p>
                <p>{expense.createdAt}</p>
                <button className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900' onClick = {handleClick}>X</button>
              </div>
            </div>
        </div>

        
      )
}

export default ExpenseInfo