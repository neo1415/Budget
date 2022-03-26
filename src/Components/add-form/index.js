import React from 'react'
import './add-form.css'
import { useState } from 'react'
import { categories } from '../../constants/add-expense'
import { AddExpense } from './../../redux/Actions/expense';
import {useDispatch} from 'react-redux'
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SuccessModal from './success-modal';
// import SuccessModal from './success-modal';

const AddForm = () => {
        const Categories = categories;
        const [categoryOpen, setCategoryOpen] = useState(false)
        const [Title, setTitle] = useState("")
        const [Amount, setAmount] = useState("")
        const [Category, setCategory] = useState( )
        const [modalOpen, setModalOpen]=useState(false);
        const dispatch = useDispatch();

        const handleTitle=(e) => {
            setTitle(e.target.value)
        }
        const handleAmount=(e) =>{
            const val=parseFloat(e.target.value)
            if(isNaN(val)){
                setAmount('')
                return
            }
            setAmount(val)
        }
        const handleCategory=(Category)=>{
            setCategory(Category)
            setCategoryOpen(false)
        }
        const handleSubmit=()=>{
            if (Title===''|| Amount=== '' || !Category){
                const notify = () => toast("PLease enter Valid data !");
                notify();
                return
            }
            const data={
                Title,
                Amount,
                Category,
                CreatedAt:new Date()
            }
            dispatch(AddExpense(data))
            setModalOpen(true)
        }
    return (
        <div className='add-form'>
        <ToastContainer
            position="bottom-left"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            />

            <SuccessModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
            
            <div className='form-item'>
            <label>Title</label>
            <input placeholder='What are you spending on? ' 
                   value={Title}
                   onChange={(e)=>handleTitle(e)}
            />
            </div>
            <div className='form-item'>
            <label>Amount</label>
            <input className='amount-input'
                   placeholder='Enter the amount' 
                   value={Amount}
                   onChange={(e)=>handleAmount(e)}
            />
            </div>
            <div className='category-container-parent'>
                <div className='category'>
                    <div className='category-dropdown' 
                       onClick={()=>setCategoryOpen(!categoryOpen)}>
                        <label>{Category ? Category.Title: 'Category'}</label>
                        <i className="fa fa-sort-desc" ></i>
                    </div>
                    {
                        categoryOpen && <div className='category-container'>
                            {Categories.map(Category=>(
                                <div className='category-item'
                                  style={{
                                      borderRight:`5px solid ${Category.color}`
                                  }} 
                                    key={Category.id} onClick={()=> handleCategory(Category)}>
                                    <label>{Category.Title}</label>
                                    <img src={Category.icon.default} alt={Category.Title} />
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
            <div className='form-add-button'>
            <div onClick={handleSubmit}>
            <label>Add</label>
                <i className ="far fa-paper-plane"></i>
            </div>
            </div>
        </div>
    
    )

}

export default AddForm
