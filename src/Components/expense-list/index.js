import React from 'react';
import './expense-list.css';
import Card from './card';
import {useSelector} from 'react-redux';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ExpenseList = () => {
   const {expenseList: list,query }= useSelector((state) => state.expenses)
   const filteredList=list.filter(item => item.Title.includes(query))
   const notifySuccess=()=> toast.success('Expense Deleted')
//    console.log(expenses);
;
    return (
        <div className='expenselist'>
     <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        />
            {filteredList.length ? filteredList.map(item=>(
                <Card item={item} notifySuccess={notifySuccess} />

            )):
            <div className='empty-state'>
                <img src={require('../../Assets/justice.jpg').default}
                alt='empty-list' className='empty-image'
                />
                <label>Your List is Empty</label> 
            </div>
            }
        </div>
    )
};

export default ExpenseList
