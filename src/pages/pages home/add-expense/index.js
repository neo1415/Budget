import React from 'react'
import AddForm from '../../../Components/add-form'
import Topbar from '../../../Components/Topbar'
import './add-expense.css'

const AddExpense = () => {
    return (
        <div className='add-expense'>
            <Topbar />
            <AddForm />
        </div>
    )
}

export default AddExpense
