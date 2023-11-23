import { useState } from 'react'
import { useExpensesContext } from "../hooks/useExpensesContext"



const ExpenseForm = () => {
    const { dispatch } = useExpensesContext()
    const [item, setitem] = useState('')
    const [quantity, setquantity] = useState('')
    const [cost, setcost] = useState('')
    const [error, seterror] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        const expenses = {item , quantity , cost}
        const response = await fetch('/api/expenses' ,{
            method : 'POST',
            body : JSON.stringify(expenses),
            headers : {
                'Content-Type' : 'application/json'
            }
        })
        const json = await response.json()
        if(!response.ok){
            seterror(json.error)
        }
        if(response.ok){
            setitem('')
            setcost('')
            setquantity('')
            seterror(null)
            console.log(json)
            dispatch({type: 'CREATE_EXPENSES' , payload: json})
        }
    }
  return (
    <form className="px-6 py-6 rounded border outline-double shadow-md shadow-indigo-600" onSubmit={handleSubmit}> 
      <h3 className='block mb-2 text-sm font-medium text-gray-900 dark:text-black'>Add Your Items</h3>

      <label className='text-black text-bold '>Item Name:</label>
      <input 
        type="text" 
        onChange={(e) => setitem(e.target.value)} 
        value={item}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
      />

      <label className='text-black text-bold '>Quantity (in kg):</label>
      <input 
        type="number" 
        onChange={(e) => setquantity(e.target.value)} 
        value={quantity}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'

      />

      <label className='text-black text-bold '>Cost:</label>
      <input 
        type="number" 
        onChange={(e) => setcost(e.target.value)} 
        value={cost}
        className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'

      />

      <button className='mt-2 text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Add Item</button>
      {error && <div className="text-red-500">{error}</div>}
    </form>
  )
}

export default ExpenseForm